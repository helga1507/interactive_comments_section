import { useMemo, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'hooks';
import { getUserCommentById, getCreatedAtById, deleteComment } from 'redux/comments';
import { getUser } from 'redux/user';

import { Content } from './Content';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { Reply } from './Reply';
import { Header, Name, Date, OwnerLabel } from './styled';

interface MainProps {
    id: number;
    setReply: () => void;
}

export const Main = ({ id, setReply }: MainProps) => {
    const user = useSelector(getUserCommentById(id));
    const createdAt = useSelector(getCreatedAtById(id));
    const ownerUser = useSelector(getUser);
    const dispatch = useAppDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const isOwnerComment = user.username === ownerUser.username;

    const handleDelete = useCallback(() => dispatch(deleteComment(id)), [id, dispatch]);

    const action = useMemo(() => {
        if (!isOwnerComment) {
            return <Reply onClick={setReply} />;
        }

        return (
            <div>
                <Delete onClick={handleDelete} />
                <Edit setIsEditing={setIsEditing} />
            </div>
        );
    }, [isOwnerComment, handleDelete, setIsEditing, setReply]);

    return (
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
                {action}
            </Header>
            <Content {...{ id, isEditing, setIsEditing }} />
        </div>
    );
};
