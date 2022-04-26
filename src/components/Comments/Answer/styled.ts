import styled from 'styled-components';

export const Container = styled.div`
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.7em;
    column-gap: 15px;
    display: grid;
    grid-template-columns: 40px 1fr auto;
    margin-top: 15px;
    padding: 25px;
`;

export const Avatar = styled.div`
    width: 40px;
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-row-gap: 10px;
`;