import styled from "styled-components";

import { motion } from "framer-motion";
function Nav() {
  return (
    <NavContainer>
      <NavDIv>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src="./img/logo.png" alt="logo" style={{ width: "50%" }} />
        </motion.div>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ShareIcons>
            <Icon href="https://www.facebook.com/smartbaedal" target="_blank">
              <img
                src="./img/iconFacebook.png"
                alt="icon_facebook"
                style={{ width: "60%" }}
              />
            </Icon>
            <Icon
              href="https://www.instagram.com/baemin_official/"
              target="_blank"
            >
              <img
                src="./img/iconInstagram.png"
                alt="icon_instagram"
                style={{ width: "60%" }}
              />
            </Icon>
            <Icon href="https://blog.naver.com/smartbaedal" target="_blank">
              <img
                src="./img/iconBlog.png"
                alt="icon_blog"
                style={{ width: "60%" }}
              />
            </Icon>
            <Icon
              href="https://www.youtube.com/user/smartbaedal2"
              target="_blank"
            >
              <img
                src="./img/iconYoutube.png"
                alt="icon_youtube"
                style={{ width: "60%" }}
              />
            </Icon>
          </ShareIcons>
        </motion.div>
      </NavDIv>
    </NavContainer>
  );
}
export default Nav;
const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 999;
`;
const NavDIv = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  margin: 0px auto;
  padding: 55px 50px 0px;
  width: 1024px;
  z-index: 999;
`;
const ShareIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.a`
  list-style-type: none;
`;
