/* 
index.js파일의 작업 = 컨테이너. 
Home의 state(상태값)을 가진 모든 리액트 컴포넌트
*/
import React from "react";
import HomePresenter from "./HomePresenter";
import { movieApi } from "api";

export default class extends React.Component {
  // data들
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    // error 발생과 loading이 됬는지 확인을 위해 추가해주자
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      // await하지 않으면 promise로 일 끝날 때 까지 대기하라고 뜬다
      // 3개의 데이터를 setState
      // object destructuring (객체 비구조화 할당)으로 선언
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();

      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();

      const {
        data: { results: popular }
      } = await movieApi.popular();

      this.setState({
        //nowPlaging : nowPlaying을 간결하게 인식
        nowPlaying,
        upcoming,
        popular
      })
      
    } catch (error) {
      this.setState({
        error: "Can't find movies informations"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  /* add login , get api, error handling 추가 */

  // 해당 컴포넌트 렌더링
  render() {
    // 객체 비구조화 할당 (obejct destructuring)
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
