import React from 'react'
import styled from 'styled-components';
import {
    Card, CardImg, CardBody,
    CardTitle, CardText, Spinner
  } from 'reactstrap';
import axios from 'axios';
import { useParams }  from 'react-router-dom';

import {API_URL } from './Home';

const MoviePage = () => {
    let { id } = useParams();
    const [isLoading, setIsLoading] = React.useState(true)

    const [movieDetails, setMovieDetails] = React.useState({});

    React.useEffect(() => {
        
        const fetchMovie = async () => {
            axios(API_URL + "&i=" + id).then(
                ({data}) => {
          
                  setMovieDetails(data);
                  setIsLoading(false)
                }
        )}

        fetchMovie();

    }, [id])

    const { Title, Poster, Actors, Awards, Realeased } = movieDetails;

    if (isLoading) {
        return (
            <StyledSpinner>
                <Spinner color="primary" />
            </StyledSpinner>
        )
    }
        

    return (
        <StyledMoviePage>

            
                    <StyledCardContainer>
                        <Card style={{height: '100%'}}>
                                    <CardImg top width="100%" height="500px" src={Poster} alt={Title} />
                                    <CardBody style={{ padding: "0.25px" }}>
                                        <CardTitle>{Title}</CardTitle>
                                        <CardText>{Actors}</CardText>
                                        <CardText>{Awards}</CardText>
                                        <CardText>{Realeased}</CardText>
                                    </CardBody>
                                </Card>
                    </StyledCardContainer>
                )
            
            
        </StyledMoviePage>
    )
}

const StyledMoviePage = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: whitesmoke;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    padding: 4rem 0;
`;

const StyledCardContainer = styled.div`
    width: 500px;
    margin: 4rem auto;
`;

const StyledSpinner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default MoviePage
