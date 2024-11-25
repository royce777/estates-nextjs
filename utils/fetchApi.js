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

export const deleteApi = async (url, withCredentials) => {
  const response = await axios.delete(url, {withCredentials: withCredentials});
  return response;
}

export const postApi = async (url, data, withCredentials) => {
  try {
    const response = await axios.post(url, data, {withCredentials: withCredentials});
    return response;
  }
  catch (error) {
    console.log("Network error");
    return undefined;
  }
};

export const putApi = async (url, data, withCredentials) => {
  try {
    const response = await axios.put(url, data, {withCredentials: withCredentials});
    return response;
  }
  catch (error) {
    console.log("Network error");
    return undefined;
  }
};
