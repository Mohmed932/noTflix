import React, { useEffect, useState } from "react";
import "./Searching.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Searching = ({ all }) => {
  const [search, setsearch] = useState("");
  const baseURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="Searching">
      <Link to="/">
        <AiOutlineArrowLeft className="AiOutlineArrowLeft" />
      </Link>
      <div className="search">
        <input
          type="text"
          placeholder="Search Movies"
          onChange={(e) => setsearch(e.target.value)}
        />
        <FaSearch className="icon" />
      </div>
      <div className="all-movies">
        {all
          .filter((i) => i.title.includes(search))
          .map(({ poster_path, title, id, release_date, vote_average }) => (
            <div className="movies-detalies" key={id}>
              <img src={`${baseURL}${poster_path}`} alt="" />
              <div className="movies-word">
                <div className="movies-title">
                  <Link
                    to={`/move/${id}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <span>{title}</span>
                  </Link>
                </div>
                <div className="movies-title">
                  <span className="quality">{vote_average}</span>
                  <span className="movies-year">{release_date}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Searching;
