import { useState } from 'react';
import { Button } from 'components/Button';

import { useAppDispatch } from 'hooks';
import { TextArea } from 'components/Comments/TextArea';
import { addComment } from 'redux/comments/actions';

import { Container, Avatar, ButtonsContainer } from './styled';

interface AnswerProps {
    id?: number;
    replyingTo?: string;
    onClickCancel?: () => void;
}

export const Answer = ({ id, replyingTo, onClickCancel }: AnswerProps) => {
    const replyStart = `@${replyingTo} `;
    const dispatch = useAppDispatch();
    const [text, setText] = useState(replyingTo ? replyStart : '');

    const handleClickSend = () => {
        dispatch(addComment(text.replace(replyStart, ''), id));
        setText('');
        onClickCancel?.();
    };

    return (
        <Container>
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
