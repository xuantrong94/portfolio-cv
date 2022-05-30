import React, { useState } from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import {
  BiBook,
  BiMessageSquareDetail,
} from "react-icons/bi";

const Nav = () => {
  const navItems = [
    {
      id: 1,
      ref: "",
      item: <AiOutlineHome />,
    },
    {
      id: 2,
      ref: "about",
      item: <AiOutlineUser />,
    },
    {
      id: 3,
      ref: "experience",
      item: <BiBook />,
    },
    {
      id: 4,
      ref: "contact",
      item: <BiMessageSquareDetail />,
    },
  ];

  const [active, setActive] = useState();

  return (
    <nav className="nav">
      {navItems.map(({id, ref, item}) => (
        <a
          key={id}
          href={`#${ref}`}
          className={active === id ? "active" : ""}
          onClick={() => setActive(id)}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
