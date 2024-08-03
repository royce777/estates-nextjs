import axios from "axios";
const https = require('https');

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;



export const fetchApi = async (url, token) => {
  try {
    let headers = undefined;
    if (token) {
      headers = {
        Cookie: `access_token_cookie=${token}`
      }
    }
    const { data } = await axios.get(url, { withCredentials: true, headers });
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