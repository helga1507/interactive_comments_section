import { ListComments, CommentType } from 'redux/comments/types';

import { Comment } from 'widgets/Comment';

import { Ul } from './styled';

interface TreeListProps {
    list: ListComments;
    getReplies: (id: CommentType['id']) => ListComments;
}

export const TreeList = ({ list, getReplies }: TreeListProps) => {
    return (
        <Ul>
            {list.map((comment) => {
                const replies = getReplies(comment.id);

                return (
                    <div key={comment.id}>
                        <Comment comment={comment} />
                        {replies?.length ? <TreeList list={replies} getReplies={getReplies} /> : null}
                    </div>
                );
            })}
        </Ul>
    );
};
