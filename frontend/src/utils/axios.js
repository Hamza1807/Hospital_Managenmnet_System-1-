import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // Backend URL
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer AIzaSyAo7VWi5cwJ1k75nfua0U4gXD5ZXpWxliI`, // Replace YOUR_API_KEY with the actual API key
  },
});

export default instance;
