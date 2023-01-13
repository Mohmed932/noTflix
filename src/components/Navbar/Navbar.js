import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import {
  RiMovie2Line,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setshow] = useState(false);
  const [gte, setgte] = useState(false);
  window.onscroll = () => {
    window.scrollY > 50 ? setgte(true) : setgte(false);
  };
  return (
    <div className={gte ? "Navbar gte" : "Navbar"}>
      <div className="Navbar-logo">
        <RiMovie2Line className="icon icon-Movie" />
        <h2>Movie</h2>
      </div>
      <div className={show ? "SideBar showing" : "SideBar"}>
        <div className={show ? "SideBar-left showing" : "SideBar-left"}>
          <div className="SideBar-item">
            <a href="#TopRated" onClick={() => setshow(false)}>
              TopRated
            </a>
            <a href="#Trending" onClick={() => setshow(false)}>
              Trending
            </a>
            <a href="#Popular" onClick={() => setshow(false)}>
              Popular
            </a>
            <a href="#Upcoming" onClick={() => setshow(false)}>
              Upcoming
            </a>
          </div>
          <Link to="search">
            <div className="side-Search">
              <input type="text" placeholder="Search" className="search" />
              <FaSearch className="icon" />
            </div>
          </Link>
          <div className="side">
            <span>
              <a href="https://www.facebook.com/Anamohmed135">
                <RiFacebookCircleFill className="foot-icons" />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/Anamohmed00">
                <RiTwitterFill className="foot-icons" />
              </a>
            </span>
            <span>
              <a href="https://github.com/Mohmed932">
                <RiGithubFill className="foot-icons" />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/mohmedmahmoudfouad">
                <RiLinkedinBoxFill className="foot-icons" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="Navbar-center">
        <a href="#TopRated">TopRated</a>
        <a href="#Trending">Trending</a>
        <a href="#Popular">Popular</a>
        <a href="#Upcoming">Upcoming</a>
      </div>
      <div className="Navbar-search">
        <Link to="/search">
          <FaSearch className="icon" />
        </Link>
      </div>
      <div className="Navbar-mobile" onClick={() => setshow(!show)}>
        <span className={show ? "one" : ""}></span>
        <span className={show ? "two" : ""}></span>
        <span className={show ? "three" : ""}></span>
      </div>
    </div>
  );
};

export default Navbar;
