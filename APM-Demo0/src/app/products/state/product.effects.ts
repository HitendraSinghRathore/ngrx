import { Action } from '@ngrx/store';
import * as productActions from './product.actions';
import { ProductService } from './../product.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, mergeEffects } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Product } from '../product';
import { of, Observable } from 'rxjs';
@Injectable()
export class ProductEffects {


  constructor(
    private actions$: Actions,
    private productServeice: ProductService
  ) { }

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Load),
    mergeMap(
      (action: productActions.Load) => this.productServeice.getProducts().pipe(
        map(
          (products: Product[]) => (new productActions.LoadSuccess(products))
        ),
        catchError(err => of(new productActions.LoadFailure(err)))
      ))
  );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.ProductUpdate),
    map((action: productActions.ProductUpdate) => action.payload),
    mergeMap((product: Product) =>
      this.productServeice.updateProduct(product).
        pipe(
          map(
            (updatedProduct: Product) => (new productActions.ProductUpdateSuccess(updatedProduct))
          ),
          catchError(
            err => of(new productActions.ProductUpdateFail(err))
          )
        )

    )

  )

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.DeleteProduct),
    map((action: productActions.DeleteProduct) => action.payload),
    mergeMap((productId: number) => this.productServeice.deleteProduct(productId)
    .pipe(
      map(() => new productActions.DeleteProductSuccess()),
      catchError(err => of(new productActions.DeleteProductFail(err)))
    )
    )
  );

  @Effect()
  saveProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.SaveProduct),
    map((action: productActions.SaveProduct) => action.payload),
    mergeMap(
      (product: Product) => this.productServeice.createProduct(product)
      .pipe(
        map((newProduct: Product) => (new productActions.SaveProductSuccess(newProduct))),
        catchError(err => of(new productActions.SaveProductFail(err)))
      )
    ));

}
