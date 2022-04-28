import { useState } from 'react';
import { Button } from 'components/Button';

import { useAppDispatch } from 'hooks';
import { TextArea } from 'components/TextArea';
import { addComment } from 'redux/comments/actions';
import { CommentType } from 'redux/comments/types';

import { Container, Avatar, ButtonsContainer } from './styled';

interface AnswerProps {
    replyingId?: CommentType['id'];
    replyingTo?: string;
    onClickCancel?: () => void;
}

export const Answer = ({ replyingId, replyingTo, onClickCancel }: AnswerProps) => {
    const replyStart = `@${replyingTo} `;
    const dispatch = useAppDispatch();
    const [text, setText] = useState(replyingTo ? replyStart : '');

    const handleClickSend = () => {
        dispatch(addComment(text.replace(replyStart, ''), replyingId, replyingTo));
        setText('');
        onClickCancel?.();
    };

    return (
        <Container isReplying={!!replyingTo}>
            <Avatar>
                <img src="/images/avatars/image-juliusomo.png" alt="avatar" />
            </Avatar>
            <TextArea {...{ replyingTo, text, setText }} placeholder="Add a comment..." />
            <ButtonsContainer>
                <Button variant="primary" onClick={handleClickSend}>
                    {replyingTo ? 'Reply' : 'Send'}
                </Button>
                {replyingTo && (
                    <Button variant="primary" actionType="destructive" onClick={onClickCancel}>
                        Cancel
                    </Button>
                )}
            </ButtonsContainer>
        </Container>
    );
};
