import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    ${props =>
    props.inverted &&
    css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover{
            background: white;
            color: black;
        }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
    <fragment>
        <Box color="pink"/>
        <Box color="black">
            <Button>소개</Button>
            <Button inverted={true}>메뉴</Button>
            <Button>예약</Button>
            <Button inverted={true}>공지사항</Button>
        </Box>
        
    </fragment>
);

export default StyledComponent