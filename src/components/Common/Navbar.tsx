import React from "react";
import "../../Styles/Navbar.scss";
import logo from "../../Assets/images/logo.svg";
import bell from "../../Assets/images/bell_icon.svg";
import profile_pic from "../../Assets/images/profile pic.svg";
import dropdown from "../../Assets/images/dropdown.svg";
import searchbtn from "../../Assets/images/searchbar.svg";
import search from "../../Assets/images/search.svg";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-container_logo">
        <img src={logo} alt="logo" />{" "}
      </div>
      <div className="nav-container_search-bar">
        <input
          type="text"
          className="nav-container_search-bar--input"
          placeholder="Search for anything"
        />
        <div className="iconContainer">
          <img src={search} alt="icon" className="searchBtn" />
        </div>
      </div>
      <div className="nav-menu">
        <div className="nav-menu_nav-link">
          <p className="nav-menu_nav-link--docs">Docs</p>
          <div className="nav-menu_nav-link--bell">
            <img src={bell} alt="icon" />
          </div>
          <div className="nav-menu_nav-link--profile">
            <div className="nav-menu_nav-link--profile_pic">
              <img src={profile_pic} alt="avatar" />
            </div>
            <p className="nav-menu_nav-link--loggedinuser">Adedeji</p>
          </div>
          <div className="nav-menu_nav-link--dropdown">
            <img src={dropdown} alt="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
