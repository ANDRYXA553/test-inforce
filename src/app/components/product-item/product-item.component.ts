import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductFormComponent} from "../product-form/product-form.component";
import {Product} from "../../interfaces/product";


@Component({
  selector: 'app-user-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {


  @Input()
  product: Product;

  constructor(private ngbModal: NgbModal) {
  }

  ngOnInit(): void {

  }


  openedUserEditModal() {
    const editComponent = this.ngbModal.open(ProductFormComponent, {centered: true, size: 'lg'});
    editComponent.componentInstance.product = this.product;
  }
}
