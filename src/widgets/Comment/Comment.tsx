import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import { CommentType } from 'redux/comments/types';
import { deleteComment } from 'redux/comments';
import { getUser } from 'redux/user';
import { Controls } from 'widgets/Comment/Controls';
import { ScoreButton } from 'components/ScoreButton';
import { Answer } from 'components/Answer';

import { Content } from './Content';
import { Card, ScoreContainer, ScoreNumber, Header, Name, Date, OwnerLabel } from './styled';

interface CommentProps {
    comment: CommentType;
}

export const Comment = ({ comment }: CommentProps) => {
    const { user, createdAt, id, replyingTo, content, score } = comment;
    const ownerUser = useSelector(getUser);
    const [isEditing, setIsEditing] = useState(false);
    const [isReply, setIsReply] = useState(false);
    const isOwnerComment = user.username === ownerUser.username;
    const dispatch = useAppDispatch();

    const handleDeleteClick = () => dispatch(deleteComment({ id }));
    const handleEditClick = () => setIsEditing(true);
    const handleReplyClick = () => setIsReply(true);
    const handleReplyCloseClick = () => setIsReply(false);

    return (
        <>
            <Card>
                <ScoreContainer>
                    <ScoreButton id={id} type="plus" />
                    <ScoreNumber> {score} </ScoreNumber>
                    <ScoreButton id={id} type="minus" />
                </ScoreContainer>
                <div>
                    <Header>
                        <div>
                            <img src={user.image.png} alt="avatar" />
                        </div>
                        <div>
                            <Name>{user.username}</Name>
                            {isOwnerComment && <OwnerLabel>you</OwnerLabel>}
                            <Date>{createdAt}</Date>
                        </div>
                        <Controls
                            isOwnerComment={isOwnerComment}
                            onDelete={handleDeleteClick}
                            onEdit={handleEditClick}
                            onReply={handleReplyClick}
                        />
                    </Header>
                    <Content {...{ id, isEditing, setIsEditing, content, replyingTo }} />
                </div>
            </Card>
            {isReply && <Answer replyingId={id} replyingTo={user.username} onClickCancel={handleReplyCloseClick} />}
        </>
    );
};
