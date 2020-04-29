import { User } from '../user';
import { UserAction, UserActionTypes } from './user.action';


export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initalState: UserState = {
  maskUserName: false,
  currentUser: null
};

export function reducer(state: UserState = initalState, action: UserAction): UserState {
  switch (action.type) {
    case UserActionTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload
      };
    default: return state;
  }
}
