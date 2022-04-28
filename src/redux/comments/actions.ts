import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { AppThunk } from '../store';

import { CommentType, ListComments } from './types';

export const fetchRequest = createAction('COMMENTS/FETCH_REQUEST');
export const fetchSuccess = createAction<ListComments>('COMMENTS/FETCH_SUCCESS');
export const fetchFailure = createAction<any>('COMMENTS/FETCH_FAILURE');

export const updateCommentRequest = createAction('COMMENTS/UPDATE_COMMENT_REQUEST');
export const updateCommentSuccess = createAction<CommentType>('COMMENTS/UPDATE_COMMENT_SUCCESS');
export const updateCommentFailure = createAction('COMMENTS/UPDATE_COMMENT_FAILURE');

export const updateCommentsList = createAction<ListComments>('COMMENTS/UPDATE_COMMENTS');
export const updateCommentContent = createAction<Pick<CommentType, 'id' | 'content'>>('COMMENTS/UPDATE_COMMENT_CONTENT');
export const updateCommentScore = createAction<{ id: CommentType['id']; type: 'plus' | 'minus'}>('COMMENTS/UPDATE_COMMENT_SCORE');
export const deleteComment = createAction<{ id: CommentType['id'] }>('COMMENTS/DELETE_COMMENT');

export const fetchComments = (): AppThunk => async (dispatch) => {
    dispatch(fetchRequest());

    try {
        const { data } = await axios.get('/files/comments.json');

        return dispatch(fetchSuccess(data));
    } catch (e) {
        return dispatch(fetchFailure(e));
    }
};

export const addComment = (content: string, replyId: CommentType['parentId'] = null, replyingTo = ''): AppThunk => async (dispatch, getState) => {
    const { comments, user } = getState();
    const comment = {
        content,
        replyingTo, 
        user,
        id: uuidv4(),
        createdAt: 'now', 
        parentId: replyId, 
        score: 0,
    };

    return dispatch(updateCommentsList([ ...comments, comment]));
};
