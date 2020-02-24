import React from 'react';
import styled from 'styled-components';
import Box from './box';

const StyledBoard = styled.div`
display: flex;
flex-wrap: wrap;
border: 2px solid black;
width: 30vw;
height: 60vh;
margin: 50px;
`;

const Board = ({board, handleClick}) => {
    return (
        <StyledBoard>
            {board.map((value, index) => {
                return(
                    <Box value={value} key={index} id={index} handleClick={handleClick}/>
                )
            })}
        </StyledBoard>

    )
};

export default Board;