import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ProductCreateAction, ProductDeleteAction, ProductUpdateAction} from "../../redux/actions/products";

import {Subscription} from "rxjs";
import {MessagesService} from "../../sevices/messages.service";
import {Product} from "../../interfaces/product";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.sass', '../main/main.component.sass'],
})


export class ProductFormComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  imgUrl: string;
  imageInput = new FormControl('', Validators.required)
  isFormSubmited = false;
  selectedRole: null | string = null
  storeSub: Subscription;

  createForm: FormGroup


  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private store: Store,
    private messagesService: MessagesService,
    private cd: ChangeDetectorRef
  ) {
    this.createFormFunc();

  }

  ngOnInit(): void {
    this.setUserFromState();
  }


  setUserFromState() {

    if (this.product) {
      this.imgUrl = this.product.imageUrl
      this.createForm.patchValue({
        ...this.product,
        name: this.product.name,
        count: this.product.count,
        weight: this.product.weight,
        size: {
          width: this.product.size.width,
          height: this.product.size.height
        }
      });
      this.cd.markForCheck()
    }
  }


  createFormFunc() {

    this.createForm = this.fb.group({
        name: ['', Validators.compose([Validators.required])],
        count: ['', Validators.compose([Validators.required])],
        weight: ['', Validators.compose([Validators.required])],
        size: this.fb.group({
          width: ['', Validators.compose([Validators.required])],
          height: ['', Validators.compose([Validators.required])],
        })
      }
    );
  }

  closeModal(): void {
    this.activeModal.close();
  }

  submitForm(): void {
    this.isFormSubmited = true;
    if (this.createForm.valid && this.imgUrl) {
      let product = this.createForm.value as Product;
      product.id = Date.now();
      product.comments = [];
      if (this.imgUrl) {
        product.imageUrl = this.imgUrl;
      }
      this.store.dispatch(new ProductCreateAction(product));

      this.closeModal();
      this.messagesService.setMessage({
        errorMessage: false,
        successMessage: true,
        textOfMessage: 'Product create successful.'
      });
    }
  }


  checkValidity(control: string, errorType = '') {

    for (const controlKey in this.createForm.controls) {

      if (control === 'size') {

        const sizeFormGroup = this.createForm.controls[control] as FormGroup
        for (const sizeControlKey in sizeFormGroup.controls) {
          return (sizeFormGroup.controls[errorType].errors?.required && this.isFormSubmited);
        }
      }

      if (control === controlKey && errorType === 'require') {
        return (this.createForm.controls[control].errors?.required && this.isFormSubmited);
      }

      if (control === controlKey) {
        return (this.createForm.controls[control].errors && this.isFormSubmited);
      }
    }
  }


  setImage($event: Event) {
    const target = $event.target as HTMLInputElement
    if (target.files?.[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(target.files[0])
      reader.onload = (event: any) => {
        this.imgUrl = event.target.result

      }
    }
  }

  deleteUser() {
    if (this.product) {
      this.store.dispatch(new ProductDeleteAction(this.product.id));
      this.activeModal.close();
      this.messagesService.setMessage({
        errorMessage: false,
        successMessage: true,
        textOfMessage: 'Product delete successful'
      });
    }
  }

  checkValidityImage() {
    return this.imageInput.invalid && this.isFormSubmited
  }


  updateUser() {

    this.isFormSubmited = true

    if (this.createForm.valid) {
      let product = {...this.product, ...this.createForm.value, imageUrl: this.imgUrl} as Product;
      this.store.dispatch(new ProductUpdateAction(product));
      this.activeModal.close();
      this.messagesService.setMessage({
        errorMessage: false,
        successMessage: true,
        textOfMessage: 'Product update successful'
      });
    }
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
