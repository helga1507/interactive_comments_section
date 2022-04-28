import React, { useEffect } from 'react';

import { useAppDispatch } from 'hooks';
import { fetchUserData } from 'redux/user';

import { Comments } from '../Comments';
import { Body } from './styled';

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUserData());
    }, []);

    return (
        <Body>
            <Comments />
        </Body>
    );
};
