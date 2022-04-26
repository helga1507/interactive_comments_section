import styled from 'styled-components';

export const Body = styled.div`
    align-items: center;
    background-color: ${({theme}) => theme.colors.veryLightGray};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;