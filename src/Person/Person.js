import React from 'react';
import styled from 'styled-components';

const Person = ({ item }) => {

    return (
        <StyledPerson>
             <StyledImage src={item.avatar} alt=""/>
             <StyledParagraphe >Hi I am { item.first_name }</StyledParagraphe>
        </StyledPerson>
    )
}

const StyledParagraphe = styled.p`
    font-size: ${(props) => props.age ? props.age : 18 }px;
    text-align: center;
    color: palevioletred;
`;

const StyledPerson = styled.div`
    border: 1px solid black;
    border-radius: 4px;
    margin: 5px auto;
    padding: 8px;
    width: 250px;
    background-color: rgb(2504, 254, 254);
    box-shadow: 0 0 4px #333;

    :hover {
        box-shadow: 0 0 10px #333;
    }
`

const StyledImage = styled.img`
    width: 50px;
    border-radius: 25px;
`

export default Person;