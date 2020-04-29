import { Action } from '@ngrx/store';

export enum UserActionTypes {
  MaskUserName = '[User] Toggle User Mask'
}

export class MaskUserName implements Action {
  readonly type = UserActionTypes.MaskUserName;

  constructor(public payload: boolean){}
}

export type UserAction = MaskUserName;
