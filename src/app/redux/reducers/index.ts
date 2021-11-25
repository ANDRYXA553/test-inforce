import {ActionReducerMap} from "@ngrx/store";
import {productListNode, productReducer} from "./products";
import {ProductActions} from "../actions/products";
import ProductsList from "../../interfaces/productList";


export interface State {
  [productListNode]: ProductsList
}

export const reducer: ActionReducerMap<State, ProductActions> = {
  [productListNode]: productReducer
}


