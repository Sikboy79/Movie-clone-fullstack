import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null); // start with null

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzVjODJhYTBlYjA1OTNlNjY5OGM4NDIzNDI5ODAyZiIsIm5iZiI6MTc2MDM4NjIwNi43NzQwMDAyLCJzdWIiOiI2OGVkNWM5ZWZjYWMwOWJlODVhMjE4ODQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j18yUJQbKqJUDraUn06-YF8ggXO9QO0qDcY_wGoNbSA",
    },
  };

  useEffect(() => {
    if (!id) return;

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          console.warn("No video found for this movie.");
          setApiData(null);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="Back"
        onClick={() => navigate(-1)}
        className="back-btn"
      />

      {/* Only render iframe if apiData exists */}
      {apiData && apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title={apiData.name || "trailer"}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}

      {/* Safely render info */}
      {apiData && (
        <div className="player-info">
          <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : "N/A"}</p>
          <p>{apiData.name || "Unknown"}</p>
          <p>{apiData.type || "Unknown"}</p>
        </div>
      )}
    </div>
  );
};

export default Player;
