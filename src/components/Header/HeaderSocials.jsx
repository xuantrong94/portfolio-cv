import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/xuantrong94"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/nguyen-xuan-trong/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
