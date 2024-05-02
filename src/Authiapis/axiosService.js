import axios from "axios";
import config from "./config";

export const makeApiRequest = async (params) => {
  try {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "*"
    };
    let response;
    console.log('config.BACKEND_URL', config.BACKEND_URL)

    switch (params.method.toUpperCase()) {
      case "GET":
        response = await axios.get(`${config.BACKEND_URL}${params.url}`, { headers });
        break;
      case "POST":
        response = await axios.post(`${config.BACKEND_URL}${params.url}`, params.data, { headers });
        break;
      case "PUT":
        response = await axios.put(`${config.BACKEND_URL}${params.url}`, params.data, { headers });
        break;
      case "DELETE":
        response = await axios.delete(`${config.BACKEND_URL}${params.url}`, { headers });
        break;
      default:
        throw new Error(`Unsupported method: ${params.method}`);
    }
    return response.data;
  } catch (error) {
    console.log("axios error", error);
    throw error;
  }
};