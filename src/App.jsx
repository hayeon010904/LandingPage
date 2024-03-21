import Detail from "./Detail";
import Main from "./Main";
import Nav from "./Nav";
import scrollImg from "./img/icon-scroll.png";
import Section1Text from "./img/section1Text.png";
import Section2Text from "./img/section2Text.png";
import Section3Text from "./img/section3Text.png";
import Section4Text from "./img/section4Text.png";
import Section5Text from "./img/section5Text.png";
import Section6Text from "./img/section6Text.png";
import Section7Text from "./img/section7Text.png";
import Section8Text from "./img/section8Text.png";

import Section1Img from "./img/section1Img.png";
import Section2Img from "./img/section2Img.png";
import Section3Img from "./img/section3Img.png";
import Section4Img from "./img/section4Img.png";
import Section5Img from "./img/section5Img.png";
import Section6Img from "./img/section6Img.png";
import Section7Img from "./img/section7Img.png";
import Section8Img from "./img/section8Img.png";

import { Section, SectionsContainer } from "react-fullpage";
let options = {
  anchors: [
    "section1",
    "section2",
    "section3",
    "section4",
    "section5",
    "section6",
    "section7",
    "section8",
    "section9",
    "section10",
  ],
};
function App() {
  return (
    <div className="App">
      <Nav />
      <SectionsContainer {...options} anchors={options.anchors}>
        <Section>
          <Main />
        </Section>
        <img
          src={scrollImg}
          alt="scroll"
          style={{
            position: "fixed",
            bottom: "1rem",
            left: "50%",
            width: "4rem",
            zIndex: "999",
          }}
        />

        <Section>
          <Detail
            TextSrc={Section1Text}
            ImgSrc={Section1Img}
            descriptions={"오늘도 당신에게 행복을 배달 중입니다"}
          />
        </Section>
        <Section>
          <Detail
            TextSrc={Section2Text}
            ImgSrc={Section2Img}
            descriptions={
              <>
                <span>
                  내가 있는 곳으로 바로 와서 배달 시간이 빨라요.
                  <br />
                  신속한 배달이 필요할 땐 한집배달로 주문해보세요.
                </span>
                <br />
                <br />
                <span>
                  한집배달 서비스는 현재 전국 일부 지역에서 서비스 중입니다.
                  <br />더 많은 지역으로 확장 준비 중이니 조금만 기다려 주세요.
                </span>
              </>
            }
          />
        </Section>
        <Section>
          <Detail TextSrc={Section3Text} ImgSrc={Section3Img} descriptions="" />
        </Section>
        <Section>
          <Detail TextSrc={Section4Text} ImgSrc={Section4Img} descriptions="" />
        </Section>
        <Section>
          <Detail TextSrc={Section5Text} ImgSrc={Section5Img} descriptions="" />
        </Section>
        <Section>
          <Detail TextSrc={Section6Text} ImgSrc={Section6Img} descriptions="" />
        </Section>
        <Section>
          <Detail TextSrc={Section7Text} ImgSrc={Section7Img} descriptions="" />
        </Section>
        <Section>
          <Detail TextSrc={Section8Text} ImgSrc={Section8Img} descriptions="" />
        </Section>
        <Section>
          <Detail
            TextSrc={Section8Text}
            ImgSrc={Section8Img}
            descriptions="내 계좌/카드를 등록하거나 배민 페이머니를 미리 충전하면 복잡한 결제를 한버에 끝낼 수 있어요"
          />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
