import { configureStore, Action } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { createLogger } from 'redux-logger';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { commentsReducer } from './comments';
import { userReducer } from './user';

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger({ collapsed: true })),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
