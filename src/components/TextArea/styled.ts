import styled from 'styled-components';

export const CommentText = styled.textarea`
    border-radius: 5px;
    border-color: ${({ theme }) => theme.colors.veryLightGray};
    color: ${({ theme }) => theme.colors.grayishBlue};
    line-height: 1.5em;
    letter-spacing: 0.02em;
    min-height: 100px;
    outline: none;
    padding: 10px 20px;
    width: 100%;

    &::placeholder {
        color: ${({ theme }) => theme.colors.grayishBlue};
    }

    &:focus {
        border-color: ${({ theme }) => theme.colors.moderateBlue};
    }
`;
