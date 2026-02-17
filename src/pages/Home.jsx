import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";
import heroBanner from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <img src={heroBanner} alt="Hero banner" className="banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="Hero title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
        </div>
      </div>

      {/* Movie Cards */}
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