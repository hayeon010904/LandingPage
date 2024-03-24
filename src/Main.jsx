import React from "react";
import styled from "styled-components";

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
const randomIndex = getRandomInt(4);
console.log(randomIndex);
const imagePath = `./img/main_text_${randomIndex + 1}.png`;
const Main = () => {
  return (
    <MainContainer>
      <ImgContainer>
        <Contents>
          <MainText src={imagePath} alt="mainText1" />
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
                <DownImgDiv
                  href="https://apps.apple.com/us/app/%EB%B0%B0%EB%8B%AC%EC%9D%98%EB%AF%BC%EC%A1%B1/id378084485"
                  target="_blank"
                >
                  <DownImg src="/img/img-appstore.png" alt="appStore" />
                </DownImgDiv>
                <DownImgDiv
                  href="https://play.google.com/store/apps/details?id=com.sampleapp"
                  target="_blank"
                >
                  <DownImg src="/img/img-googleplay.png" alt="googleStore" />
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
                  <img
                    src="/img/qrcode.png"
                    alt="qrcode"
                    style={{ width: "30%" }}
                  />
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
  width: 100%;
  height: 100vh;
  background-image: url("./img/main${randomIndex + 1}.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%, 50%;
  inset: 0px;
  transform: translateY(0px);
  transition: transform 0.9s ease 0s;
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
const DownImgDiv = styled.a`
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
