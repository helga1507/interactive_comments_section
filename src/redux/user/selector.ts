import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const getUserState = (state: RootState) => state.user;

export const getUser = createSelector(getUserState, (data) => data);