import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 2em;
width: calc(100% / 3);
height: calc(100% / 3);
box-sizing: border-box;
border: 1px solid black;
background-color: white;
`;

const Box = ({key, id, value, handleClick}) => {
    return(
        <StyledBox key={key} id={id} onClick={handleClick}>
            {value}
        </StyledBox>
    );
};

export default Box;