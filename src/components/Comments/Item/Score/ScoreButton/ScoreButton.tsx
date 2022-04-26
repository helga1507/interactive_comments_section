import iconMinus from 'images/icon-minus.svg';
import iconPlus from 'images/icon-plus.svg';

import { useAppDispatch } from 'hooks';
import { updateItem } from 'redux/comments';

import { ScoreIcon } from './styled';

interface ScoreButtonProps {
    id: number;
    score: number;
    type: 'plus' | 'minus';
}

const getDataByType = (type: ScoreButtonProps['type']) => {
    return {
        iconUrl: type === 'plus' ? iconPlus : iconMinus,
        mark: type === 'plus' ? 1 : -1,
    };
};

export const ScoreButton = ({ id, type, score }: ScoreButtonProps) => {
    const { iconUrl, mark } = getDataByType(type);
    const dispatch = useAppDispatch();

    const onClick = () => {
        const updatedScore = score + 1 * mark;

        dispatch(updateItem({ id, score: updatedScore }));
    };

    return (
        <ScoreIcon onClick={onClick}>
            <img src={iconUrl} alt="logo" />
        </ScoreIcon>
    );
};
