import { useSelector } from 'react-redux';

import { getScoreById } from 'redux/comments';

import { ScoreButton } from './ScoreButton';
import { Container, ScoreNumber } from './styled';

interface ScoreProps {
    id: number;
}

export const Score = ({ id }: ScoreProps) => {
    const score = useSelector(getScoreById(id));

    return (
        <Container>
            <ScoreButton id={id} type="plus" score={score} />
            <ScoreNumber> {score} </ScoreNumber>
            <ScoreButton id={id} type="minus" score={score} />
        </Container>
    );
};
