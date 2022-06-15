import axios from "axios";
//the base url to be used in the site

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  //baseURL: "https://murmuring-spire-64412.herokuapp.com/",
});

export default instance;
