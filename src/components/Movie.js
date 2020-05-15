import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, Button
  } from 'reactstrap';
  import { useHistory } from "react-router-dom";

const Movie = ({ Poster, Title, imdbID,  }) => {
    let history = useHistory();

    const handleClick = () => {
        history.push(`/movie/${imdbID}`)
    }
    
    return (
            <Card style={{height: '100%'}}>
                <CardImg top width="100%" height="340px" src={Poster} alt={Title} />
                <CardBody style={{ padding: "0.25px" }}>
                    <CardTitle>{Title}</CardTitle>
                    
                    <Button onClick={handleClick}>See More..</Button>
                </CardBody>
            </Card>
    )
}

export default Movie
