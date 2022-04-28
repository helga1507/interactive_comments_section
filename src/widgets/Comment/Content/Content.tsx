import { useState } from 'react';

import { useAppDispatch } from 'hooks';
import { Button } from 'components/Button';
import { TextArea } from 'components/TextArea';
import { updateCommentContent } from 'redux/comments';
import { CommentType } from 'redux/comments/types';

import { Container, ReplyName, ButtonsContainer } from './styled';

interface ContentProps {
    isEditing: boolean;
    id: CommentType['id'];
    content: CommentType['content'];
    replyingTo: CommentType['replyingTo'];
    setIsEditing: (isEditing: boolean) => void;
}

export const Content = ({ isEditing, id, content, replyingTo, setIsEditing }: ContentProps) => {
    const [text, setText] = useState<string>(`@${replyingTo} ${content}`);
    const dispatch = useAppDispatch();

    if (!isEditing) {
        return (
            <Container>
                {replyingTo && <ReplyName>@{replyingTo} &nbsp;</ReplyName>}
                <span>{content}</span>
            </Container>
        );
    }

    const handleCancelClick = () => setIsEditing(false);

    const handleUpdateClick = () => {
        dispatch(updateCommentContent({ id, content: text }));
        setIsEditing(false);
    };

    return (
        <>
            <TextArea {...{ text, setText, replyingTo }} />
            <ButtonsContainer>
                <Button variant="primary" actionType="destructive" onClick={handleCancelClick}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleUpdateClick}>
                    Update
                </Button>
            </ButtonsContainer>
        </>
    );
};
