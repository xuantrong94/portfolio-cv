import React from "react";

import CTA from "./CTA";
import ME from "../../assets/images/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nguyễn Xuân Trọng</h1>
        <h5 className="test-light">Front-end Developer</h5>
        <CTA />

        <HeaderSocials />
        <div className="header__me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="header__scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
