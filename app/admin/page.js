"use client";
import React, { useState } from "react";
import { fetchAlbums } from "@/lib/contentful";
import styles from "../page.module.css";

const Admin = () => {
  const [type, setType] = useState("film");
  const [movieSelected, setMovieSelected] = useState(true);
  const [musicSelected, setMusicSelected] = useState(false);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [tracks, setTracks] = useState("");
  const [h, setH] = useState("H");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setH(title);
    setMusicSelected(!musicSelected);
  };
  return (
    <div className="container">
      <h2>Admin panel {h}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Movie"
              id=""
              value={movieSelected}
              checked={movieSelected}
              onChange={(e) => {
                setMusicSelected(!musicSelected);
                setMovieSelected(!movieSelected);
              }}
            />
            <label className="form-check-label">Movie</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name=""
              id=""
              value={musicSelected}
              checked={musicSelected}
              onChange={(e) => {
                setMovieSelected(!movieSelected);
                setMusicSelected(!musicSelected);
              }}
            />
            <label className="form-check-label">Music</label>
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-3">
            <label for="inputName" className="col-4 col-form-label">
              Artist Name
            </label>
            <input
              type="text"
              value={title}
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              name="inputName"
              id="inputName"
              placeholder="Name"
            />
          </div>
          <div className="col-3">
            <label for="inputName" className="col-4 col-form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="inputName"
              id="inputName"
              placeholder="Name"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="offset-sm-4 col-sm-8">
            <button type="submit" className="btn btn-primary">
              Action
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
