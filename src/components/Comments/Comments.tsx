import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import { getList } from 'redux/comments';
import { fetchComments } from 'redux/comments/actions';

import { Answer } from './Answer';
import { List } from './List';
import { Container } from './styled';

export const Comments = () => {
    const list = useSelector(getList);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <Container>
            <List ids={list} />
            <Answer />
        </Container>
    )
};