import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

function Detail({ TextSrc, ImgSrc, descriptions }) {
  const { ref: sectionRef, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: "-50%" },
    initial: { opacity: 0, x: "-50%" },
    exit: { opacity: 1, x: 0 },
  };

  // const onAnimationComplete = (finished) => {
  //   if (finished && inView && controls.current !== "visible") {
  //     controls.set("visible"); // 애니메이션이 완료되고 이미지가 화면에 표시된 경우에만 이미지를 보이는 상태로 설정
  //   }
  // };
  return (
    <Page>
      <Contents ref={sectionRef}>
        <MainText src={TextSrc} alt="img" />
        <div>{descriptions}</div>
        <MotionSectionImg
          src={ImgSrc}
          alt="sectionimg"
          // animate={inView ? "visible" : "hidden"} // 변경된 부분
          animate={controls} // 수정된 부
          variants={variants}
          initial="initial"
          exit="exit"
          // onAnimationComplete={() => {
          //   if (inView) {
          //     controls.set("visible");
          //   }
          // }}
          // onAnimationComplete={onAnimationComplete} // 애니메이션이 완료된 후 호출될 콜백
        />
      </Contents>
    </Page>
  );
}

export default Detail;
const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(42, 193, 188);

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
  right: -30%;
  /* transform: translateY(-50%); */

  /* position: absolute;
  top: 1rem;
  right: 3rem;
  z-index: 99; */
`;
const MotionSectionImg = motion(SectionImg);
