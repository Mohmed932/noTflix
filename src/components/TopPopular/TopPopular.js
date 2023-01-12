import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopPopular.css";
import { motion } from "framer-motion";

const TopPopular = ({ Popular }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [Number, setNumber] = useState(3);
  return (
    <div className="TopPopular" id="Popular">
      <div className="TopPopular-movies">
        <span className="ONLINE">ONLINE STREAMING</span>
        <h1>Top Popular Movies</h1>
        <div className="all-movies">
          {Popular.slice(0, Number).map(
            ({ poster_path, title, id, release_date, vote_average }) => (
              <motion.div
                className="movies-detalies"
                key={id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={`${baseURL}${poster_path}`} alt="" />
                <div className="movies-word">
                  <div className="movies-title">
                    <Link
                      to={`move/${id}`}
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
              </motion.div>
            )
          )}
        </div>
        <div className="more">
          <button
            onClick={() => setNumber(20)}
            style={Number > 3 ? { display: "none" } : { display: "block" }}
          >
            More Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPopular;
