import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    // id를 가지고 얻게 되는 모든 것은 movie든 tv show든 result를 가지게 된다.
    result: null,
    loading: true,
    error: null
  };

  render() {
    const { result, loading, error } = this.state;
    return (
      <SearchPresenter
        result={result}
        loading={loading}
        error={error}
      />
    );
  }
}
