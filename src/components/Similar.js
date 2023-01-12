import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TopPopular/TopPopular.css";
import { motion } from "framer-motion";

const Similar = () => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [Similar, setSimilar] = useState([]);
  const [Number, setNumber] = useState(3);
  const id = useParams().id;
  const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
  const UrlSimilar = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${APIKEY}&language=en-US&page=1`;
  try {
    const getPopular = async () => {
      const req = await fetch(UrlSimilar);
      const res = await req.json();
      setSimilar(res.results);
    };
    getPopular();
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="TopPopular">
      <div className="TopPopular-movies">
        <span className="ONLINE">ONLINE STREAMING</span>
        <h1>Similar</h1>
        <div className="all-movies">
          {Similar.slice(0, Number).map(
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

export default Similar;
