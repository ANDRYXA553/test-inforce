import {createFeatureSelector, createSelector} from "@ngrx/store";
import ProductsList from "../../interfaces/productList";
import {productListNode} from "../reducers/products";
import {Product} from "../../interfaces/product";


export const selectProductsFeature = createFeatureSelector<ProductsList>(productListNode);


export const selectProducts = createSelector(selectProductsFeature,
  (state: ProductsList): Product[] => state.products
);
