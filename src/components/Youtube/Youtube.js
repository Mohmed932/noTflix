import React from "react";
import "./Youtube.css";
import { AiOutlineClose } from "react-icons/ai";

const Youtube = ({ video, setshow }) => {
  return (
    <div className="Youtube">
      <div className="Youtube-video">
        <AiOutlineClose
          className="AiOutlineClose"
          onClick={() => setshow(false)}
        />
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtube;
