import {Action} from "@ngrx/store";
import {Product} from "../../interfaces/product";

export enum productActionType {
  update = 'UPDATE PRODUCT',
  delete = 'DELETE PRODUCT',
  create = 'CREATE PRODUCT',
  sort = 'SORT PRODUCT',
  saveToLs = 'SAVE TO LS',

}

export class ProductCreateAction implements Action {

  readonly type = productActionType.create;

  constructor(public payload: Product) {
  }

}

export class ProductDeleteAction implements Action {

  readonly type = productActionType.delete;

  constructor(public payload: number) {
  }

}

export class ProductUpdateAction implements Action {

  readonly type = productActionType.update;

  constructor(public payload: Product) {
  }

}

export class SortProductsAction implements Action {

  readonly type = productActionType.sort;

  constructor(public payload: string) {
  }

}

export class ProductSaveToLsAction implements Action {

  readonly type = productActionType.saveToLs;

}

export type ProductActions =
  ProductCreateAction
  | ProductDeleteAction
  | ProductUpdateAction
  | ProductSaveToLsAction
  | SortProductsAction;
