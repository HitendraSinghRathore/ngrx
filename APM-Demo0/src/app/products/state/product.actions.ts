import { Product } from '../product';
import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFailure = '[Product] Load Fail',
  ProductUpdate = '[Product] Product Updated',
  ProductUpdateSuccess = '[Product] Product Updated sucess',
  ProductUpdateFail = '[Product] Product Updated Fail',
  DeleteProduct = '[Product] Product Delete',
  DeleteProductSuccess = '[Product] Product Delete Success',
  DeleteProductFail = '[Product] Product Delete Fail',
  SaveProduct = '[Product] Save Product',
  SaveProductSuccess = '[Product] Save Product Success',
  SaveProductFail = '[Product] Save Product Fail'

}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) {}
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;

  constructor() {}
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;

}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]){}
}

export class LoadFailure implements Action {
  readonly type = ProductActionTypes.LoadFailure;

  constructor(public payload: string) {
  }
}

export class ProductUpdate implements Action {
  readonly type = ProductActionTypes.ProductUpdate;

  constructor(public payload: Product) {}

}

export class ProductUpdateSuccess implements Action {
  readonly type = ProductActionTypes.ProductUpdateSuccess;

  constructor(public payload: Product){}
}

export class ProductUpdateFail implements Action {

  readonly type = ProductActionTypes.ProductUpdateFail;

  constructor(public payload: string){}
}
export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: number) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DeleteProductSuccess;

}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DeleteProductFail;

  constructor(public payload: string) {}
}
export class SaveProduct implements Action {
  readonly type = ProductActionTypes.SaveProduct;

  constructor(public payload: Product) {}
}
export class SaveProductSuccess implements Action {
  readonly type = ProductActionTypes.SaveProductSuccess;

  constructor(public payload: Product) {}
}

export class SaveProductFail implements Action {
  readonly type = ProductActionTypes.SaveProductFail;

  constructor(public payload: string) {}
}

export type ProductActions = ToggleProductCode
| InitializeCurrentProduct
| ClearCurrentProduct
| SetCurrentProduct
| Load
| LoadSuccess
| LoadFailure
| ProductUpdate
| ProductUpdateSuccess
| ProductUpdateFail
| DeleteProduct
| DeleteProductSuccess
| DeleteProductFail
| SaveProduct
| SaveProductSuccess
| SaveProductFail;
