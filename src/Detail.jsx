import React from "react";
import styled from "styled-components";

function Detail({ TextSrc, ImgSrc ,descriptions}) {
  return (
    <Page>
      <Contents>
        <MainText src={TextSrc} alt="img" />
        <p>{descriptions}</p>
        <SectionImg src={ImgSrc} alt="section1img" />
      </Contents>
    </Page>
  );
}

export default Detail;
const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(42, 193, 188);
  position: relative;
  z-index: 1;
`;

const Contents = styled.div`
  width: 1024px;
  margin: 0px auto;
  padding: 145px 50px 0px;
`;

const MainText = styled.img`
  width: 50%;
`;
const SectionImg = styled.img`
  max-width: 700px;
  max-height: 700px;
  position: absolute;
  top: 1rem;
  right: 3rem;
  z-index: 99;
`;
