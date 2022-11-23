import axios from "axios";

const url = "http://localhost:5000";
//Url is pointing to our backend route.

export const fetchPost = () => axios.get(url);