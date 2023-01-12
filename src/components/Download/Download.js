import React from "react";
import "./Download.css";
import { FiDownload } from "react-icons/fi";
import { BsCameraVideoFill, BsFillCollectionPlayFill } from "react-icons/bs";

const Download = () => {
  return (
    <div className="Download">
      <div className="main-Download">
        <div className="Download-img">
          <img
            src="https://codewithsadee.github.io/filmlane/assets/images/service-banner.jpg"
            alt=""
          />
          <div className="download-icon">
            <h4 className="download-title">Download</h4>
            <FiDownload />
          </div>
        </div>
        <div className="Download-word">
          <div className="Download-SERVICES">
            <h1></h1>
            <span>OUR SERVICES</span>
          </div>
          <h1 className="Watch-Offline">Download Your Shows Watch Offline.</h1>
          <p className="Lorem">
            Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
            tempor.There are many variations of passages of lorem Ipsum
            available, but the majority have suffered alteration in some
            injected humour.
          </p>
          <div className="watch">
            <div className="icon-border">
              <BsFillCollectionPlayFill className="watch-icon" />
            </div>
            <div className="watch-detalies">
              <h2>Enjoy on Your TV.</h2>
              <p className="Lorem">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div className="watch">
            <div className="icon-border">
              <BsCameraVideoFill className="watch-icon" />
            </div>

            <div className="watch-detalies">
              <h2>Watch Everywhere.</h2>
              <p className="Lorem">
                Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
