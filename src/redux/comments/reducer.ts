import { createReducer } from '@reduxjs/toolkit';

import { updateCommentsList, deleteComment, updateCommentScore, updateCommentContent, fetchSuccess } from './actions';
import { ListComments } from './types';

const initialState: ListComments = [];

export const commentsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchSuccess, (_, { payload }) => payload)
        .addCase(updateCommentsList, (_, { payload }) => payload)
        .addCase(updateCommentContent, (state, { payload }) =>
            state.map((item) => (item.id === payload.id ? { ...item, ...payload } : item)),
        )
        .addCase(updateCommentScore, (state, { payload: { id, type } }) =>
            state.map((item) =>
                item.id === id ? { ...item, score: item.score + 1 * (type === 'minus' ? -1 : 1) } : item,
            ),
        )
        .addCase(deleteComment, (state, { payload }) => state.filter((item) => item.id !== payload.id));
});
