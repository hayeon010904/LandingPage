import styled from "styled-components";
// import icon_blog from "./img/iconBlog.png";
// import icon_facebook from "./img/iconFacebook.png";
// import icon_instagram from "./img/iconInstagram.png";
// import icon_youtube from "./img/iconYoutube.png";
// import logo from "./img/logo.png";

function Nav() {
  return (
    <NavContainer>
      <NavDIv>
        <div>
          <img src="./img/logo.png" alt="logo" style={{ width: "50%" }} />
        </div>
        <div>
          <ShareIcons>
            <Icon>
              <img
                src="./img/iconFacebook.png"
                alt="icon_facebook"
                style={{ width: "60%" }}
              />
            </Icon>
            <Icon>
              <img
                src="./img/iconInstagram.png"
                alt="icon_instagram"
                style={{ width: "60%" }}
              />
            </Icon>
            <Icon>
              <img
                src="./img/iconBlog.png"
                alt="icon_blog"
                style={{ width: "60%" }}
              />
            </Icon>
            <Icon>
              <img
                src="./img/iconYoutube.png"
                alt="icon_youtube"
                style={{ width: "60%" }}
              />
            </Icon>
          </ShareIcons>
        </div>
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
const Icon = styled.li`
  list-style-type: none;
`;
