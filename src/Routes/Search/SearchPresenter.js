import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

// props
const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
  <Helmet>
    <title>Search | Nomflix</title>
  </Helmet>
  <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {/* fragment로 넣어야 한다. */}
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        {/* term이 들어간 영화출력 */}
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                imageUrl={movie.poster_path}
              />
            ))}
          </Section>
        )}

        {/* term이 들어간 tv show출력 */}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV show Results">
            {tvResults.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_name}
                rating={movie.vote_average}
                year={
                  movie.first_air_date && movie.first_air_date.substring(0, 4)
                }
              />
            ))}
          </Section>
        )}

        {error && <Message text={error} color="#e74c3c" />}

        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message text={`Nothing found for ${searchTerm}`} color="#95a5a6" />
          )}
      </Fragment>
    )}
  </Container>
);

// TVContainer에서 보내준 props! 5가지 타입 체크 추후 ts사용시 제거
SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
