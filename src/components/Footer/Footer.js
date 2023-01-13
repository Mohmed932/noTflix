import React from "react";
import "./Footer.css";
import {
  RiMovie2Line,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="Footer">
      {window.scrollY > 50 ? (
        <AiOutlineArrowUp
          className="AiOutlineArrowUp"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      ) : (
        ""
      )}
      <div className="Footer-container">
        <div className="main-Footer">
          <div className="Footer-logo">
            <RiMovie2Line className="icon icon-Movie" />
            <h2>Filmlane</h2>
          </div>
          <div className="Footer-item">
            <a href="#TopRated">TopRated</a>
            <a href="#Trending">Trending</a>
            <a href="#Popular">Popular</a>
            <a href="#Upcoming">Upcoming</a>
          </div>
        </div>
        <div className="footer-border"></div>
        <div className="scoial">
          <div className="foot">
            <a href="#TopRated">FAQ</a>
            <a href="#TopRated">HELP CENTER</a>
            <a href="#TopRated">TERMS OF USE</a>
            <a href="#TopRated">PRIVACY</a>
          </div>
          <div className="foot">
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
        <div className="footer-last">
          <div className="last">
            <h3>
              © {year} <span>Mohmed mahmoud fouad</span>. All Rights Reserved
            </h3>
            <img
              src="https://codewithsadee.github.io/filmlane/assets/images/footer-bottom-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
