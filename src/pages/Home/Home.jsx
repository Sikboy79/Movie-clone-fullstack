import React, { useRef } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../../public/assets/assets/hero_banner.jpg";
import hero_title from "../../../public/assets/assets/hero_title.png";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const heroRef = useRef();

  return (
    <div className="home" ref={heroRef}>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hero banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Blockbuster Movies" category="top_rated" />
        <TitleCards title="Only on Netflix" category="popular" />
        <TitleCards title="Upcoming" category="upcoming" />
        <TitleCards title="Top picks for you" category="now_playing" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;