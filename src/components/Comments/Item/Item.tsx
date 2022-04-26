import { useState } from 'react';
import { useSelector } from 'react-redux';

import { getRepliesById, getUserCommentById } from 'redux/comments';

import { Answer } from 'components/Comments/Answer';
import { List } from 'components/Comments/List';

import { Score } from './Score';
import { Main } from './Main';
import { Card } from './styled';

interface ItemProps {
    id: number;
}

export const Item = ({ id }: ItemProps) => {
    const replies = useSelector(getRepliesById(id));
    const { username } = useSelector(getUserCommentById(id));
    const [isReply, setIsReply] = useState(false);

    const setReply = () => setIsReply(true);
    const setReplyFalsy = () => setIsReply(false);

    return (
        <>
            <Card>
                <Score {...{ id }} />
                <Main {...{ id, setReply }} />
            </Card>
            <List ids={ replies } >
                {isReply && <Answer id={id} replyingTo={ username } onClickCancel={ setReplyFalsy } />}
            </List>
        </>
    )
};
