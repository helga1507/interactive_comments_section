import styled from 'styled-components';

interface ContainerProps {
    isReplying: boolean;
}

export const Container = styled.div<ContainerProps>`
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 0.7em;
    column-gap: 15px;
    display: grid;
    grid-template-columns: 40px 1fr auto;
    margin-top: 15px;
    margin-left: ${({ isReplying }) => (isReplying ? 80 : 0)}px;
    padding: 25px;
`;

export const Avatar = styled.div`
    width: 40px;
`;

export const ButtonsContainer = styled.div`
    display: grid;
    grid-row-gap: 10px;
`;
