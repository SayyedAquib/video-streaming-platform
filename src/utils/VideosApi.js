import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com";

const options = {
  params: {geo: "IN"},
  headers: {
    "X-RapidAPI-Key": "0da373d051msh8d50bc31e9973dfp13a316jsn6e0ef3194b93",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const getVideos = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
}