import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null
  };

  // 외부 api연동. 컴포넌트에서 필요한 데이터 요청  async await로 먼저 데이터 가져와 처리하도록!
  componentDidMount = async () => {
    try {
      const {
        data: { results : topRated }
      } = await tvApi.topRated();
      const {
        data: { results : popular }
      } = await tvApi.popular();
      const {
        data: { results : airingToday }
      } = await tvApi.airingToday();

      this.setState({
        topRated,
        popular,
        airingToday
      });
    } catch {
      this.setState({
        error: "Can't find TV information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      // state보내기
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
