import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="hero">
        <img
          src="/Movie-clone-fullstack/assets/assets/hero_banner.jpg"
          alt="Hero banner"
          className="banner-img"
        />
        <div className="hero-caption">
          <img
            src="/Movie-clone-fullstack/assets/assets/hero_title.png"
            alt="Hero title"
            className="caption-img"
          />
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