import * as userAction from './user.action';


import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './../user';
import { UserState } from './user.reducer';


const getUserFeatureSelector = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureSelector,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureSelector,
  state => state.currentUser
);
