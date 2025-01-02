// pages/filmography.js
import React from "react";
import { fetchFilms } from "@/lib/contentful";
import styles from "../page.module.css";
const Filmography = async () => {
  //const data = await fetch("https://api.vercel.app/blog");
  //const films = await data.json();
  const fe = await fetchFilms();
  return (
    <div className={styles.page}>
      <h1>Filmography Page</h1>
      <ul>
        {fe.map((film) => (
          <li key={film.id}>
            <h2>
              {film.fields.title} ({film.fields.year})
            </h2>
          </li>
        ))}
      </ul>
      <p>film lists</p>
    </div>
  );
};

/* export async function getStaticProps() {
    const films = await fetchFilms();
    return {
        props: {
            films,
        },
    };
     {/* <li key={film.sys.id}>
            <h2>
              {film.title} ({film.fields.year})
            </h2>
            <p>Genre: {film.fields.genre}</p>
            <p>{film.fields.synopsis}</p>
          </li> 
} */

export default Filmography;
