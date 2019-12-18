import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    // location을 props에서 가져옴
    const {
      location: { pathname }
    } = props;

    // id를 가지고 얻게 되는 모든 것은 movie든 tv show든 result를 가지게 된다.
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    let result = null;
    try {
      if (isMovie) {
        // 위에서 let으로 선언했기 때문에
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({
        loading: false,
        result
      });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
