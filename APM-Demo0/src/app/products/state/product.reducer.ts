import { Product } from '../product';
import { ProductActionTypes, ProductActions } from './product.actions';

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initalState: ProductState = {
  showProductCode: true,
  products: [],
  currentProductId: null,
  error: ''
};

export function reducer(state = initalState, action: ProductActions): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };
      case  ProductActionTypes.SetCurrentProduct:
        return {
          ...state,
          currentProductId: action.payload.id
        };
      case ProductActionTypes.ClearCurrentProduct :
        return {
          ...state,
          currentProductId: null
        };
      case ProductActionTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProductId: 0
      };
      case ProductActionTypes.LoadSuccess:
        return {
          ...state,
          products: action.payload,
          error: ''
        };
      case ProductActionTypes.LoadFailure:
        return {
          ...state,
          products: [],
          error: action.payload
        }
      case ProductActionTypes.ProductUpdateSuccess: {
        const updatedProducts = state.products.map(
          (p) => p.id === action.payload.id ? action.payload : p
        );
        return {
          ...state,
          error : '',
          products : updatedProducts,
          currentProductId: action.payload.id

        };
      }

        case ProductActionTypes.ProductUpdateFail:
        return {
          ...state,
          error: action.payload,


        }
      case ProductActionTypes.DeleteProductSuccess: {
        const updatedProducts = state.products.filter(
          (item: Product) => item.id !== state.currentProductId
        );
        return {
          ...state,
          error: '',
          products: updatedProducts,
          currentProductId: null
        }
      }
      case ProductActionTypes.DeleteProductFail:
      return {
        ...state,
        error: action.payload
      }

      case ProductActionTypes.SaveProductSuccess: {

        return {
          ...state,
          currentProductId: action.payload.id,
          products: [...state.products, action.payload],
          error: ''

        }
      }
      case ProductActionTypes.SaveProductFail :
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}
