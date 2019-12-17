import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 0px 10px;
`;

// HomeContainer에서 받은 props
const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
  loading ? (<Loader />) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        // object에 map을 이용해 title뽑아오기
        <Section title="Now Playing">
          {nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
      )}

      {upcoming && upcoming.length > 0 && (
        // object에 map을 이용해 title뽑아오기
        <Section title="upcoming Movies">
          {upcoming.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
      )}

      {popular && popular.length > 0 && (
        // object에 map을 이용해 title뽑아오기
        <Section title="Popular Movies">
          {popular.map(movie => <span key={movie.id}>{movie.title}</span>)}
        </Section>
      )}
    </Container>
  );

// TVContainer에서 보내준 props! 5가지
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
