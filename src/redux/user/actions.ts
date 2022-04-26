import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { AppThunk } from '../store';

import { UserState } from './types';

export const fetchUserRequest = createAction('USER/FETCH_USER_REQUEST');
export const fetchUserSuccess = createAction<UserState>('USER/FETCH_USER_SUCCESS');
export const fetchUserFailure = createAction('USER/FETCH_USER_FAILURE');

export const fetchUserData = (): AppThunk => async (dispatch) => {
    dispatch(fetchUserRequest());

    try {
        const { data } = await axios.get('/files/user.json');

        return dispatch(fetchUserSuccess(data));
    } catch (e) {
        return dispatch(fetchUserFailure());
    }
};
