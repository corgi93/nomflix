import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  componentDidMount() {
    this.handleSubmit();
  }

  // 사용자 검색 - form을 submit한다. - handleSubmit
  // 사용자 입력(searchTerm)이 공백이 아닌 걸 체크 후 searche함수 실행
  handleSubmit = event => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  // input 입력이 안되는데 update해주는 function을 하나 작성
  updateTerm = (event) => {
    const { target : {value} } = event;

    // value는 event에 하나씩 찍히므로 searchTerm state에 value 이벤트들을 저장
    this.setState({
      searchTerm : value
    })
    console.log(value)
      
  };

  // term으로 검색
  searchByTerm = async term => {
    const { searchTerm } = this.state;
    this.setState({
      loading: true
    });

    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(searchTerm);

      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);

      // 누군가 검색 시 true
      this.setState({
        loading: true,
        tvResults,
        movieResults
      });
    } catch {
      this.setStates({
        error: "Can't find results."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const {
      movieResults,
      tvResults,
      searchTerm,
      loading,
      error,
      updateTerm
    } = this.state;

    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
