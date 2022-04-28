import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import { Answer } from 'components/Answer';
import { TreeList } from 'components/TreeList';
import { getComments } from 'redux/comments';
import { fetchComments } from 'redux/comments/actions';
import { CommentType } from 'redux/comments/types';

import { Container } from './styled';

export const Comments = () => {
    const comments = useSelector(getComments);
    const dispatch = useAppDispatch();
    const list = useMemo(() => comments.filter((item) => item.parentId === null), [comments]);

    useEffect(() => {
        dispatch(fetchComments());
    }, []);

    const getReplies = (id: CommentType['id']) => comments.filter((comment) => comment.parentId === id);

    return (
        <Container>
            <TreeList {...{ list, getReplies }} />
            <Answer />
        </Container>
    );
};
