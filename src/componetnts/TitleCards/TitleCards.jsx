import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer YOUR_API_KEY_HERE",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch(console.error);
  }, [category]);

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
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
