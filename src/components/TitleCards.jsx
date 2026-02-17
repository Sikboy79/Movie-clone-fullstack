import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./TitleCards.css";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const API_KEY = import.meta.env.VITE_TMDB_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category || "now_playing"}?language=en-US&page=1&api_key=${API_KEY}`
        );
        const data = await res.json();
        setApiData(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchData();
  }, [category, API_KEY]);

  useEffect(() => {
    const handleWheel = (event) => {
      if (cardsRef.current) {
        event.preventDefault(); // safe now
        cardsRef.current.scrollLeft += event.deltaY;
      }
    };

    const cardList = cardsRef.current;
    if (cardList) {
      // Attach listener explicitly as non-passive
      cardList.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (cardList) {
        cardList.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card) => (
          <Link to={`/Player/${card.id}`} className="card" key={card.id}>
            {card.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title || "Movie Poster"}
              />
            ) : (
              <div className="no-image">No Image</div>
            )}
            <p>{card.original_title || "Untitled"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;