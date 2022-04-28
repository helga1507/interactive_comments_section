import iconMinus from 'images/icon-minus.svg';
import iconPlus from 'images/icon-plus.svg';

import { useAppDispatch } from 'hooks';
import { updateCommentScore } from 'redux/comments';
import { CommentType } from 'redux/comments/types';

import { ScoreIcon } from './styled';

interface ScoreButtonProps {
    id: CommentType['id'];
    type: 'plus' | 'minus';
}

export const ScoreButton = ({ id, type }: ScoreButtonProps) => {
    const iconUrl = type === 'plus' ? iconPlus : iconMinus;
    const dispatch = useAppDispatch();

    const handleClick = () => dispatch(updateCommentScore({ id, type }));

    return (
        <ScoreIcon onClick={handleClick}>
            <img src={iconUrl} alt="logo" />
        </ScoreIcon>
    );
};
