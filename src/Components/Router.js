import React from "react";
// 우선 HashRouter을 사용해봄
// import { HashRouter as Router, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Header from "Components/Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />

      {/* Detail. 참조 컴포넌트는 Detail로 같지만 url이 다르다 */}
      <Route path="/movie/:id" component={Detail} />
      <Route path="/show/:id" component={Detail} />

      {/* 리액트에서 Redirect */}
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
