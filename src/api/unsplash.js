import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID bdn6njZFsvq_J5NlUe_mLYwXcQtacVEWkt22FLo4qtI",
  },
});
