// lib/contentful.js
import axios from "axios";

const SPACE_ID = "2j62dbhm40uf"; // Replace with your Space ID
const ACCESS_TOKEN = "Z53pMT0DkcmfJKpDHBJBHD1F2vZrCIyPhgxjzdqYRyU"; // Replace with your Access Token

const client = axios.create({
  baseURL: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const fetchFilms = async () => {
  const response = await client.get("/entries?content_type=film");
  return response.data.items;
};

export const fetchAlbums = async () => {
  const response = await client.get("/entries?content_type=album");
  return response.data.items;
};
