import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Similar from "../Similar";
import "./Move.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Youtube from "../Youtube/Youtube";

const baseURL = "https://image.tmdb.org/t/p/original/";
const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";

const Move = () => {
  const [move, setmove] = useState([]);
  const [video, setvideo] = useState();
  const [show, setshow] = useState(false);
  const id = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id.id}?api_key=${APIKEY}&append_to_response=videos,images`;
  useEffect(() => {
    const fetching = async () => {
      try {
        const req = await fetch(URL);
        const res = await req.json();
        setvideo(res.videos.results[0].key);
        return setmove(res);
      } catch (error) {
        return console.log(error.message);
      }
    };
    fetching();
  }, [id]);
  return (
    <div className="allsingle">
      <div className="single">
        <AiOutlineArrowLeft
          className="AiOutlineArrowLeft"
          onClick={() => window.history.back()}
        />
        {show ? <Youtube video={video} setshow={setshow} /> : ""}
        <div className="single-image">
          <img
            src={`${baseURL}${move.backdrop_path}`}
            alt=""
            className="backdrop_path"
          />
        </div>
        <div className="single-main">
          <img src={`${baseURL}${move.poster_path}`} alt="" className="image" />
          <div className="single-word">
            <h1>{move.title}</h1>
            <p>{move.overview}</p>
            <button onClick={() => setshow(true)}>WATCH NOW</button>
          </div>
        </div>
      </div>
      <Similar />
      <Footer />
    </div>
  );
};

export default Move;
