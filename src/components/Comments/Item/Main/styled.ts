import styled from 'styled-components';

export const Header = styled.div`
    align-items: center;
    display: grid;
    column-gap: 15px;
    grid-template-columns: 30px 1fr auto;
    margin-bottom: 10px;
`;

export const Name = styled.span`
    font-weight: 500;
`;

export const Date = styled.span`
    color: ${({ theme }) => theme.colors.grayishBlue};
    margin-left: 15px;
`;

export const OwnerLabel = styled.span`
    background-color: ${({ theme }) => theme.colors.moderateBlue};
    border-radius: 2px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 11px;
    font-weight: 500;
    margin-left: 15px;
    padding: 2px 5px;
`;
