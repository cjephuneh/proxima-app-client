import axios from "axios";
//the base url to be used in the site

const instance = axios.create({
  baseURL: "http://proximaserver.eastus.cloudapp.azure.com/api/",
  //baseURL: "https://murmuring-spire-64412.herokuapp.com/",
});

export default instance;
