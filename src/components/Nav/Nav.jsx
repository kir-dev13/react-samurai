import React from "react";
import s from "./Nav.module.sass";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a href="/#">Profiles</a>
      </div>
      <div>
        <a href="/#">Messages</a>
      </div>
      <div>
        <a href="/#">News</a>
      </div>
      <div>
        <a href="/#">Music</a>
      </div>
      <div>
        <a href="/#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
