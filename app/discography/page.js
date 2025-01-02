import React from "react";
import { fetchAlbums } from "@/lib/contentful";
import styles from "../page.module.css";

const Discography = async () => {
  const albums = await fetchAlbums();
  return (
    <div className={styles.page}>
      <h1>Discography</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>
              {album.fields.title} ({album.fields.year})
            </h2>
            <p>Genre: {album.fields.gener}</p>
            <h3>Tracks:</h3>
            <ul>
              {album.fields.tracks.map((track, index) => (
                <li key={index}>{track}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discography;
