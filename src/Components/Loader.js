import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top : 100px;
  font-size : 30px;
`;

export default () => (
  <Container>
    {/* emoji는 span으로 감사 img role이 있어야하며 label이 있어야함  */}
    <span role="img" aria-label="Loading">
        ⏰
    </span>
  </Container>
);
