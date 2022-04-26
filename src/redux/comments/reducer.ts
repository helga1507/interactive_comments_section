import { createReducer } from '@reduxjs/toolkit';

import { updateList, updateData, updateItem, fetchSuccess } from './actions';
import { CommentsState } from './types';

const initialState: CommentsState = {
    list: [],
    data: {},
};

export const commentsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(updateList, (state, { payload }) => ({ ...state, list: payload }))
        .addCase(updateData, (state, { payload }) => ({ ...state, data: payload }))
        .addCase(updateItem, (state, { payload }) => ({
            ...state,
            data: { ...state.data, [payload.id]: { ...state.data[payload.id], ...payload } },
        }))
        .addCase(fetchSuccess, (state, { payload: { data, list } }) => ({ ...state, data, list }));
});
