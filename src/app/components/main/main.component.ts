import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductFormComponent} from "../product-form/product-form.component";
import {select, Store} from "@ngrx/store";
import {selectProducts} from "../../redux/selectors/products";
import {Observable} from "rxjs";
import {MessagesService} from "../../sevices/messages.service";
import {Product} from "../../interfaces/product";
import {SortProductsAction} from "../../redux/actions/products";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass', '../product-form/product-form.component.sass']
})
export class MainComponent implements OnInit {
  isSelectOpened = false
  selectedSort: string
  products$: Observable<Product[]> = this.store.pipe(select(selectProducts));
  showMessage$: Observable<Boolean> = this.messageService.currentMessage.pipe(select('successMessage'));
  errorMessage$: Observable<Boolean> = this.messageService.currentMessage.pipe(select('errorMessage'));
  textOfMessage$: Observable<string> = this.messageService.currentMessage.pipe(select('textOfMessage'));

  constructor(private ngbModal: NgbModal,
              private store: Store,
              private messageService: MessagesService) {

  }

  ngOnInit(): void {


  }

  selectSort(sortType: string) {
    this.selectedSort = sortType
    this.isSelectOpened = false;
    this.store.dispatch(new SortProductsAction(sortType))

  }

  openModal() {
    this.ngbModal.open(ProductFormComponent, {centered: true, size: 'lg'});
  }

}
