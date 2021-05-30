import React from "react";
import s from "./Header.module.sass";
import logo from "../../logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
    </header>
  );
};

export default Header;
