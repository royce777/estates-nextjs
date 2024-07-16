import axios from "axios";
const https = require('https');

export const baseUrl = "https://localhost:5000";


const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

export const fetchApi = async (url, token) => {
  try {
    let headers = undefined;
    if (token) {
      headers = {
        Cookie: `access_token_cookie=${token}`
      }
    }
    const { data } = await axios.get(url, { withCredentials: true, httpsAgent, headers });
    return data;
  }
  catch (err) {
    console.log("ERROR")
    console.log(err);
    return err.response;
  }
};

export const postApi = async (url, estate_data) => {
  const response = await axios.post(url, estate_data, { withCredentials: true, httpsAgent });
  return response;
};

export const postApiContact = async (url, formData) => {
  try {
    const response = await axios.post(url, formData, { httpsAgent });
    return response;
  }
  catch (error) {
    console.log("Network error");
    return undefined;
  }
};