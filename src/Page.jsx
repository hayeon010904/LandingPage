import React from "react";
import styled from "styled-components";

function Pages() {
  return (
    <Page>
      <Contents>contents</Contents>
    </Page>
  );
}
const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(42, 193, 188);
`;
const Contents = styled.div`
  width: 1024px;
  margin: 0px auto;
  padding: 145px 50px 0px;
`;

export default Pages;
