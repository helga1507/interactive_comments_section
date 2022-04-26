import styled from 'styled-components';

export const Container = styled.div`
    color: ${({ theme }) => theme.colors.grayishBlue};
    line-height: 1.5em;
    letter-spacing: 0.02em;
`;

export const ReplyName = styled.span`
    font-weight: 500;
    color: ${({ theme }) => theme.colors.moderateBlue};
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 15px;
    justify-content: flex-end;
    margin-top: 10px;
`;
