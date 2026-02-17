import React, { useRef, useEffect } from "react";
import "./Home.css";
import Navbar from "../../componetnts/Navbar/Navbar";
import hero_banner from "../../assets/assets/hero_banner.jpg";
import hero_title from "../../assets/assets/hero_title.png";
import play_icon from "../../assets/assets/Play_icon.png";
import info_icon from "../../assets/assets/Info_icon.png";
import TitleCards from "../../componetnts/TitleCards/TitleCards";
import Footer from "../../componetnts/Footer/Footer";

const Home = () => {
  const bannerRef = useRef(null);
  const playBtnRef = useRef(null);
  const infoBtnRef = useRef(null);

  useEffect(() => {
    // Example: Add a class to banner after mount
    if (bannerRef.current) {
      bannerRef.current.classList.add("fade-in");
    }

    // Example: Attach hover effect safely
    const playBtn = playBtnRef.current;
    const infoBtn = infoBtnRef.current;

    const hoverEffect = (btn) => () => btn.classList.add("hover");
    const leaveEffect = (btn) => () => btn.classList.remove("hover");

    if (playBtn) {
      playBtn.addEventListener("mouseenter", hoverEffect(playBtn));
      playBtn.addEventListener("mouseleave", leaveEffect(playBtn));
    }
    if (infoBtn) {
      infoBtn.addEventListener("mouseenter", hoverEffect(infoBtn));
      infoBtn.addEventListener("mouseleave", leaveEffect(infoBtn));
    }

    // Cleanup listeners
    return () => {
      if (playBtn) {
        playBtn.removeEventListener("mouseenter", hoverEffect(playBtn));
        playBtn.removeEventListener("mouseleave", leaveEffect(playBtn));
      }
      if (infoBtn) {
        infoBtn.removeEventListener("mouseenter", hoverEffect(infoBtn));
        infoBtn.removeEventListener("mouseleave", leaveEffect(infoBtn));
      }
    };
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" ref={bannerRef} />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istambul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn" ref={playBtnRef}>
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn" ref={infoBtnRef}>
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
