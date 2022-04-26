import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import { Button } from 'components/Button';
import { TextArea } from 'components/Comments/TextArea';
import { getContentById, updateComment } from 'redux/comments';

import { Container, ReplyName, ButtonsContainer } from './styled';

interface ContentProps {
    isEditing: boolean;
    id: number;
    setIsEditing: (isEditing: boolean) => void;
}

export const Content = ({ isEditing, id, setIsEditing }: ContentProps) => {
    const { content, replyingTo } = useSelector(getContentById(id));
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

    const handleClickCancel = () => setIsEditing(false);

    const handleClickUpdate = () => {
        dispatch(updateComment({ id, content: text }));
        setIsEditing(false);
    };

    return (
        <>
            <TextArea {...{ text, setText, replyingTo }} />
            <ButtonsContainer>
                <Button variant="primary" actionType="destructive" onClick={handleClickCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClickUpdate}>
                    Update
                </Button>
            </ButtonsContainer>
        </>
    );
};
