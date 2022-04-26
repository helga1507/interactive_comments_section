import styled from 'styled-components';

export const Card = styled.li`
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.7em;
    column-gap: 25px;
    display: grid;
    grid-template-columns: auto 1fr;
    margin-top: 15px;
    min-width: 400px;
    padding: 25px;
`;
