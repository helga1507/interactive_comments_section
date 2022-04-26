import styled from 'styled-components';

interface UlProps {
    marginLeft: number;
}

export const Ul = styled.ul`
    & > & {
        margin-left: 80px;
        position: relative;

        &::before {
            border-left: solid 2px ${({ theme }) => theme.colors.lightGray}; 
            content: '';
            display: block;
            height: 100%;
            left: -40px;
            position: absolute;
            top: 0;
        }
    }
`;