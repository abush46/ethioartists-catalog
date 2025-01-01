// pages/discography.js
import React from "react";

const albums = [
  {
    id: 1,
    title: "Album Title 1",
    year: 2020,
    genre: "Pop",
    tracks: ["Track 1", "Track 2"],
  },
  // Add more albums here
];

const Discography = () => {
  return (
    <div>
      <h1>Discography</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>
              {album.title} ({album.year})
            </h2>
            <p>Genre: {album.genre}</p>
            <h3>Tracks:</h3>
            <ul>
              {album.tracks.map((track, index) => (
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
