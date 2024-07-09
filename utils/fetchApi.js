import axios from "axios";

export const baseUrl = "http://127.0.0.1:5000";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  }
  catch (err) {
    console.log("ERROR")
    console.log(err);
    return err.response;
  }
};

export const postApi = async (url, estate_data) => {
  const response = await axios.post(url, estate_data, { withCredentials: true });
  return response;
};

export const postApiContact = async (url, formData) => {
  try {
    const response = await axios.post(url, formData);
    return response;
  }
  catch (error) {
    console.log("Network error");
    return undefined;
  }
};