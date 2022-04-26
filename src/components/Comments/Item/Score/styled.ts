import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.veryLightGray};
    border-radius: 7px;
    padding: 5px;
`;

export const ScoreNumber = styled.div`
    color: ${({ theme }) => theme.colors.moderateBlue};
    font-weight: 500;
    margin: 10px 0;
    text-align: center;
`;