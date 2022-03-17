import axios from "axios";

export const baseUrl = "http://127.0.0.1:5000";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url);

  return data;
};
