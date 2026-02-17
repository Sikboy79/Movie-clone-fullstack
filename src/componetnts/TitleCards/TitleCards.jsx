import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzVjODJhYTBlYjA1OTNlNjY5OGM4NDIzNDI5ODAyZiIsIm5iZiI6MTc2MDM4NjIwNi43NzQwMDAyLCJzdWIiOiI2OGVkNWM5ZWZjYWMwOWJlODVhMjE4ODQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.j18yUJQbKqJUDraUn06-YF8ggXO9QO0qDcY_wGoNbSA",
    },
  };

  // Fetch movies from TMDB API
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, [category]);

  // Horizontal scroll for mouse wheel
  const handleWheel = (event) => {
    if (cardsRef.current) {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef} onWheel={handleWheel}>
        {apiData.map((card) => (
          <Link to={`/player/${card.id}`} className="card" key={card.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
        {apiData.length === 0 && <p className="no-data">No movies available</p>}
      </div>
    </div>
  );
};

export default TitleCards;
