import { createReducer } from '@reduxjs/toolkit';

import { fetchUserSuccess } from './actions';
import { UserState } from './types';

const initialState: UserState = {
    username: '',
    image: {
        png: '',
    },
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchUserSuccess, (state, { payload }) => ({ ...state, ...payload }))
})
