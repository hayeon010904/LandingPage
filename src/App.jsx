import { Section, SectionsContainer } from "react-fullpage";
import Detail from "./Detail";
import Main from "./Main";
import Nav from "./Nav";

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
const jumpKeyframes = `
  @keyframes jump {
    0% { transform: translateY(0); }
    30% { transform: translateY(-30px); }
    60% { transform: translateY(0px); }
    80% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }
`;
function App() {
  return (
    <div className="App">
      <style>{jumpKeyframes}</style>
      <img
        src="img/icon-scroll.png"
        alt="scroll"
        style={{
          position: "fixed",
          bottom: "1rem",
          left: "50%",
          width: "4rem",
          zIndex: "999",
          animation: "0.5s ease 0s 3 normal none running jump",
        }}
      />
      <Nav />
      <SectionsContainer {...options} anchors={options.anchors}>
        <Section>
          <Main />
        </Section>

        <Section>
          <Detail
            TextSrc="/img/section1Text.png"
            ImgSrc="/img/section1Img.png"
            descriptions={"오늘도 당신에게 행복을 배달 중입니다"}
          />
        </Section>
        <Section>
          <Detail
            TextSrc="/img/section2Text.png"
            ImgSrc="/img/section2Img.png"
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
          <Detail
            TextSrc="/img/section3Text.png"
            ImgSrc="/img/section3Img.png"
            descriptions=""
          />
        </Section>
        <Section>
          <Detail
            TextSrc="/img/section4Text.png"
            ImgSrc="/img/section4Img.png"
            descriptions=""
          />
        </Section>
        <Section>
          <Detail
            TextSrc="/img/section5Text.png"
            ImgSrc="/img/section5Img.png"
            descriptions=""
          />
        </Section>
        <Section>
          <Detail
            TextSrc="/img/section6Text.png"
            ImgSrc="/img/section6Img.png"
            descriptions=""
          />
        </Section>
        <Section>
          <Detail
            TextSrc="/img/section7Text.png"
            ImgSrc="/img/section7Img.png"
            descriptions=""
          />
        </Section>
        <Section>
          <Detail
            TextSrc="/img/section8Text.png"
            ImgSrc="/img/section8Img.png"
            descriptions="내 계좌/카드를 등록하거나 배민 페이머니를 미리 충전하면 복잡한 결제를 한버에 끝낼 수 있어요"
          />
        </Section>
        <Section>
          <Detail
            TextSrc="/img/section9Text.png"
            ImgSrc="/img/section9Img.png"
            descriptions={"오늘도 당신에게 행복을 배달 중입니다"}
          />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
