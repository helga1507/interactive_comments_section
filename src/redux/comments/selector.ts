import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const getCommentsState = (state: RootState) => state.comments;

export const getList = createSelector(getCommentsState, ({ list }) => list);

export const getScoreById = (id: number) => createSelector(getCommentsState, ({ data }) => data[id].score);

export const getRepliesById = (id: number) => createSelector(getCommentsState, ({ data }) => data[id].replies);

export const getUserCommentById = (id: number) => createSelector(getCommentsState, ({ data }) => data[id].user);

export const getCreatedAtById = (id: number) => createSelector(getCommentsState, ({ data }) => data[id].createdAt);

export const getContentById = (id: number) =>
    createSelector(getCommentsState, ({ data }) => ({ content: data[id].content, replyingTo: data[id].replyingTo }));
