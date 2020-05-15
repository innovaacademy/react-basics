import React from 'react';
import styled from 'styled-components';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Spinner,
} from 'reactstrap';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovie, setLoading } from '../actions/fetchActions';

const MoviePage = ({ movie, fetchMovie, setLoading, isLoading }) => {
    let { id } = useParams();

    React.useEffect(() => {
        fetchMovie(id);
        setLoading();
    }, [fetchMovie, id, setLoading]);

    const { Title, Poster, Actors, Awards, Realeased } = movie;

    if (isLoading) {
        return (
            <StyledSpinner>
                <Spinner color="primary" />
            </StyledSpinner>
        );
    }

    return (
        <StyledMoviePage>
            <StyledCardContainer>
                <Card style={{ height: '100%' }}>
                    <CardImg
                        top
                        width="100%"
                        height="500px"
                        src={Poster}
                        alt={Title}
                    />
                    <CardBody style={{ padding: '0.25px' }}>
                        <CardTitle>{Title}</CardTitle>
                        <CardText>{Actors}</CardText>
                        <CardText>{Awards}</CardText>
                        <CardText>{Realeased}</CardText>
                    </CardBody>
                </Card>
            </StyledCardContainer>
            )
        </StyledMoviePage>
    );
};

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
`;

const mapStateToProps = (state) => ({
    movie: state.app.movie,
    isLoading: state.app.loading,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(MoviePage);
