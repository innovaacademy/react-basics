import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, Button
  } from 'reactstrap';
const Movie = ({ Poster, Title, imdbID, openPopup }) => {
    return (
            <Card style={{height: '100%'}}>
                <CardImg top width="100%" height="340px" src={Poster} alt={Title} />
                <CardBody style={{ padding: "0.25px" }}>
                    <CardTitle>{Title}</CardTitle>
                    <Button onClick={() => openPopup(imdbID)}>See More..</Button>
                </CardBody>
            </Card>
    )
}

export default Movie
