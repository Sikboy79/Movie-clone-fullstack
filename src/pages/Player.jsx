import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import back_arrow_icon from "../assets/back_arrow_icon.png";
import "./Player.css";

const Player = () => {
  const { id } = useParams();  // get movie ID from URL
  const navigate = useNavigate();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const API_KEY = import.meta.env.VITE_TMDB_KEY;
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setVideoData(res.results[0]);
        } else {
          setVideoData(null);
        }
      })
      .catch(console.error);
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-btn"
        onClick={() => navigate(-1)}
      />
      {videoData ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${videoData.key}`}
          title={videoData.name || "Trailer"}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default Player;