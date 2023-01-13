import { lazy, Suspense, useState } from "react";

const Loading = lazy(() => import("../components/Loading/Loading"));
const Download = lazy(() => import("../components/Download/Download"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Main = lazy(() => import("../components/Main/Main"));
const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const TopPopular = lazy(() => import("../components/TopPopular/TopPopular"));
const TopRated = lazy(() => import("../components/TopRated"));
const Trending = lazy(() => import("../components/Trending"));
const Trial = lazy(() => import("../components/Trial/Trial"));
const Upcoming = lazy(() => import("../components/Upcoming"));
const Home = ({ setall }) => {
  const [Upcome, setUpcome] = useState([]);
  const [Trend, setTrend] = useState([]);
  const [TopRate, setTopRate] = useState([]);
  const [famous, setfamous] = useState([]);

  const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
  const UrlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;
  const UrlTrending = `
https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
  const UrlTopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`;
  const UrlPopular = `
https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
  try {
    const getPopular = async () => {
      const req = await fetch(UrlPopular);
      const res = await req.json();
      setfamous(res.results);
    };
    getPopular();
  } catch (error) {
    console.log(error);
  }
  try {
    const getPopular = async () => {
      const req = await fetch(UrlTopRated);
      const res = await req.json();
      setTopRate(res.results);
    };
    getPopular();
  } catch (error) {
    console.log(error);
  }
  try {
    const getPopular = async () => {
      const req = await fetch(UrlUpcoming);
      const res = await req.json();
      setUpcome(res.results);
    };
    getPopular();
  } catch (error) {
    console.log(error);
  }
  try {
    const getPopular = async () => {
      const req = await fetch(UrlTrending);
      const res = await req.json();
      setTrend(res.results);
    };
    getPopular();
  } catch (error) {
    console.log(error);
  }
  setall(famous);
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Main />
      <Trending Trending={Trend} />
      <TopPopular Popular={famous} />
      <TopRated TopRated={TopRate} />
      <Upcoming Upcoming={Upcome} />
      <Download />
      <Trial />
      <Footer />
    </Suspense>
  );
};

export default Home;
