import { createAction } from '@reduxjs/toolkit'
import axios from 'axios';

import { AppThunk } from '../store';

import { ListType, DataType, ItemType } from './types';

export const fetchRequest = createAction('COMMENTS/FETCH_REQUEST');
export const fetchSuccess = createAction<{ data: DataType; list: ListType }>('COMMENTS/FETCH_SUCCESS');
export const fetchFailure = createAction('COMMENTS/FETCH_FAILURE');

export const updateCommentRequest = createAction('COMMENTS/UPDATE_COMMENT_REQUEST');
export const updateCommentSuccess = createAction<ItemType>('COMMENTS/UPDATE_COMMENT_SUCCESS');
export const updateCommentFailure = createAction('COMMENTS/UPDATE_COMMENT_FAILURE');

export const updateList = createAction<ListType>('COMMENTS/UPDATE_LIST');
export const updateData = createAction<DataType>('COMMENTS/UPDATE_DATA');
export const updateItem = createAction<{ id: number } & Partial<ItemType>>('COMMENTS/UPDATE_ITEM');

const isNil = (val: any) => val === undefined || val === null;

export const fetchComments = (): AppThunk => async dispatch => { 
    dispatch(fetchRequest());

    try {
        const { data } = await axios.get('/files/comments.json');
        
        return dispatch(fetchSuccess(data));
    } catch(e) {
        return dispatch(fetchFailure());
    }
};

export const updateComment = (comment: { id: number; content: string }): AppThunk => async (dispatch) => {
    dispatch(updateItem(comment));
};

export const deleteComment = (id: number): AppThunk => async (dispatch, getState) => {
    const { data, list } = getState().comments;
    const { nextId, prevId, parentId, replies } = data[id];
    const updatedData = { ...data };

    if (!isNil(parentId)) {
        updatedData[parentId] = {
            ...updatedData[parentId],
            replies: updatedData[parentId].replies.filter((item: number) => item !== id),
        };
    } else {
        dispatch(updateList(list.filter(item => item !== id)));        
    }

    if (!isNil(prevId)) {
        updatedData[prevId] = { ...updatedData[prevId], nextId: prevId };
    }

    if (!isNil(nextId)) {
        updatedData[nextId] = { ...updatedData[nextId], prevId: nextId };
    }

    if (replies.length) {
        replies.forEach((id: number) => delete updatedData[id]);
    }

    delete updatedData[id];

    dispatch(updateData(updatedData));
};

export const addComment = (content: string, replyId?: number): AppThunk => async (dispatch, getState) => {
    const { comments: { data, list }, user } = getState();
    const id = +Object.keys(data).slice(-1)[0] + 1;
    const comment: ItemType = {
        id,
        content,
        user,
        createdAt: 'now',
        replyingTo: '',
        score: 0,
        nextId: null,
        prevId: null,
        parentId: replyId ?? null,
        replies: [],
    }
    const updatedData = { ...data, [id]: comment };

    if (!replyId) {
        comment.prevId = list.slice(-1)[0] ?? null;

        dispatch(updateList([...list, id]));
        dispatch(updateData(updatedData));

        return;
    }

    const lastRepliedId = data[replyId].replies.slice(-1)[0];

    comment.prevId = lastRepliedId ?? null;
    comment.replyingTo = data[replyId].user.username

    updatedData[replyId] = {
        ...updatedData[replyId],
        replies: [...updatedData[replyId].replies, id],
    }

    if (!isNil(lastRepliedId)) {
        updatedData[lastRepliedId] = {
            ...updatedData[lastRepliedId],
            nextId: id,
        }
    }

    dispatch(updateData(updatedData));
}