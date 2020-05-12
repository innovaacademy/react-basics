import React from 'react'
import styled from 'styled-components';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Button
  } from 'reactstrap';

const Popup = ({ Title, Poster, Actors, Awards, Realeased, closePopup}) => {
    return (
        <StyledPopup>

            <StyledCardContainer>
                <Card style={{height: '100%'}}>
                            <CardImg top width="100%" height="500px" src={Poster} alt={Title} />
                            <CardBody style={{ padding: "0.25px" }}>
                                <CardTitle>{Title}</CardTitle>
                                <CardText>{Actors}</CardText>
                                <CardText>{Awards}</CardText>
                                <CardText>{Realeased}</CardText>
                                <Button style={{marginBottom: "10px"}} onClick={closePopup}>Close Popup</Button>
                            </CardBody>
                        </Card>
            </StyledCardContainer>
            
        </StyledPopup>
    )
}

const StyledPopup = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: whitesmoke;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const StyledCardContainer = styled.div`
    width: 500px;
    margin: 4rem auto;
`;

export default Popup
