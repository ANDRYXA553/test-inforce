import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map} from "rxjs/operators";
import {productActionType, ProductSaveToLsAction} from "../actions/products";


@Injectable()
export class ProductsEffects {

  saveToLs$ = createEffect(() => this.actions$.pipe(
    ofType(productActionType.delete, productActionType.create, productActionType.update),
    map(() => new ProductSaveToLsAction())
  ))

  constructor(private actions$: Actions,
  ) {
  }
}
