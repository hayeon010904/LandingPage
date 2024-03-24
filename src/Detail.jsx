// import { motion, useAnimation } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";
// import styled from "styled-components";

// function Detail({ TextSrc, ImgSrc, descriptions }) {
//   const { ref: sectionRef, inView } = useInView();
//   const controls = useAnimation();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   }, [inView]);

//   useEffect(() => {
//     if (isVisible) {
//       controls.start("visible");
//     } else {
//       controls.start("hidden");
//     }
//   }, [controls, isVisible]);

//   const variants = {
//     visible: { opacity: 1, x: 0 },
//     hidden: { opacity: 1, x: "-50%" },
//     initial: { opacity: 0, x: "-50%" },
//     exit: { opacity: 1, x: 0 },
//   };

//   return (
//     <Page>
//       <Contents ref={sectionRef}>
//         <MainText src={TextSrc} alt="img" />
//         <div>{descriptions}</div>
//         <MotionSectionImg
//           src={ImgSrc}
//           alt="sectionimg"
//           animate={controls}
//           variants={variants}
//           initial="initial"
//           exit="exit"
//         />
//       </Contents>
//     </Page>
//   );
// }

// export default Detail;
// const Page = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: rgb(42, 193, 188);
//   z-index: 1;
// `;

// const Contents = styled.div`
//   width: 1024px;
//   margin: 0px auto;
//   padding: 145px 50px 0px;
//   position: relative;
// `;

// const MainText = styled.img`
//   width: 50%;
// `;

// const SectionImg = styled(motion.img)`
//   max-width: 700px;
//   max-height: 700px;
//   position: absolute;
//   right: 0%;
//   top: -5%;
// `;
// const MotionSectionImg = styled(SectionImg)``;
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

function Detail({ TextSrc, ImgSrc, descriptions }) {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const { ref: sectionRef, inView } = useInView({
    threshold: 0.5, // 스크롤 위치를 조절할 수 있는 threshold를 조정합니다.
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isVisible]);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: "50%" },
    initial: { opacity: 0, x: "50%" },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <Page>
      <Contents ref={sectionRef}>
        <MainText src={TextSrc} alt="img" />
        <div>{descriptions}</div>
        <MotionSectionImg
          src={ImgSrc}
          alt="sectionimg"
          animate={controls}
          variants={variants}
          initial="initial"
          exit="exit"
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
  position: relative;
`;

const MainText = styled.img`
  width: 50%;
`;

const SectionImg = styled(motion.img)`
  max-width: 700px;
  max-height: 700px;
  position: absolute;
  right: 0%;
  top: -5%;
`;
const MotionSectionImg = styled(SectionImg)``;
