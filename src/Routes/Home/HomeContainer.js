/* 
index.js파일의 작업 = 컨테이너. 
Home의 state(상태값)을 가진 모든 리액트 컴포넌트
*/
import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
  // data들
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    // error 발생과 loading이 됬는지 확인을 위해 추가해주자
    error : null,
    loading :true
  };

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
