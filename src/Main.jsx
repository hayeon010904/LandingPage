import React from "react";
import styled from "styled-components";

import googleStore from "./img//img-googleplay.png";
import appStore from "./img/img-appstore.png";
import background1 from "./img/main1.jpg";
import mainText1 from "./img/main_text_1.png";
import mainText2 from "./img/main_text_2.png";
import mainText3 from "./img/main_text_3.png";
import mainText4 from "./img/main_text_4.png";
import mainText5 from "./img/main_text_5.png";


import qrcode from "./img/qrcode.png";
const MainTextArr = [mainText1, mainText2, mainText3, mainText4, mainText5];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const Main = () => {
  const randomIndex = getRandomInt(4);
  return (
    <MainContainer>
      <ImgContainer>
        <Contents>
          <MainText src={MainTextArr[randomIndex]} alt="mainText1" />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginTop: "1rem",
            }}
          >
            <div>
              <p style={{ color: "white", margin: 0, padding: 0 }}>
                앱스토어 다운로드
              </p>
              <DownDiv>
                <DownImgDiv>
                  <DownImg src={appStore} alt="appStore" />
                </DownImgDiv>
                <DownImgDiv>
                  <DownImg src={googleStore} alt="googleStore" />
                </DownImgDiv>
              </DownDiv>
            </div>

            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  position: "relative",
                  left: "15rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "white", marginBottom: "1rem" }}>
                    QR코드 다운로드
                  </p>
                  <img src={qrcode} alt="qrcode" style={{ width: "30%" }} />
                </div>
              </div>
            </div>
          </div>
        </Contents>
      </ImgContainer>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 100%;
  /* height: 682px; */
  height: 100vh;
  background-color: rgb(42, 193, 188);
`;
const ImgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%, 50%;
  inset: 0px;
`;
const Contents = styled.div`
  width: 1024px;
  margin: 0px auto;
  padding: 145px 50px 0px;
`;
const MainText = styled.img`
  width: 50%;
`;

const DownDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 1rem;
`;
const DownImgDiv = styled.div`
  background-color: white;
  border-radius: 50px;
  width: 45%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DownImg = styled.img`
  width: 75%;
`;
