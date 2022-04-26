import styled from 'styled-components';

interface ButtonProps {
    color: string;
};

export const ButtonPrimary = styled.button<ButtonProps>`
    background-color: ${({ theme, color }) => theme.colors[color]};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.white};
    display: block;
    min-width: 100px;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
`;

export const ButtonSecondary = styled.button<ButtonProps>`
    color: ${({ theme, color }) => theme.colors[color]};
    font-weight: 500;
    padding: 5px;

    & img {
        width: 11px;
        margin-right: 5px;
    }
`;