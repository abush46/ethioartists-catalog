import React from "react";
import { fetchFilms } from "../../lib/contentful";

const Filmography = ({ films }) => {
  return (
    <div>
      <h1>Filmography</h1>
      <ul>
        {films.map((film) => (
          <li key={film.sys.id}>
            <h2>
              {film.fields.title} ({film.fields.year})
            </h2>
            <p>Genre: {film.fields.genre}</p>
            <p>{film.fields.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const films = await fetchFilms();
  return {
    props: {
      films,
    },
  };
}

export default Filmography;
