import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

// HomeContainer에서 받은 props
const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Helmet>
          <title>Movies | Nomflix</title>
        </Helmet>
        {nowPlaying && nowPlaying.length > 0 && (
          // object에 map을 이용해 title뽑아오기
          <Section title="Now Playing">
            {nowPlaying.map(movie => (
              <Poster
                // movie.api의객체 key들
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                imageUrl={movie.poster_path}
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {upcoming && upcoming.length > 0 && (
          // object에 map을 이용해 title뽑아오기
          <Section title="upcoming Movies">
            {upcoming.map(movie => (
              // 모든 element는 key가 필요
              <Poster
                // movie.api의객체 key들
                key={movie.id}
                id={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                imageUrl={movie.poster_path}
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          // object에 map을 이용해 title뽑아오기
          <Section title="Popular Movies">
            {popular.map(movie => (
              <>
                <Poster
                  // movie.api의객체 key들
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  imageUrl={movie.poster_path}
                  isMovie={true}
                />
              </>
            ))}
          </Section>
        )}

        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
