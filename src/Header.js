import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [text, setText] = useState("");

  const InputEvent = (event) => {
    setText(event.target.value);
  };

  const GoToSearch = () => {
    if (text.trim()) {
      window.location = `/search/${text}`;
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/" className="header__logo_a">
          <img
            alt="youtube img"
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </Link>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="header__input">
        <input onChange={InputEvent} type="text" placeholder="Search.." />
        <button className="search" onClick={GoToSearch}>
          <SearchIcon />
        </button>
      </form>
      <div className="header__icons">
        <VideoCallIcon className="icon" />
        <AppsIcon className="icon" />
        <NotificationsIcon className="icon" />
        <Avatar alt="" src="" />
      </div>
    </div>
  );
}

export default Header;
