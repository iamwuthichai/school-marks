import axios from "axios";
import { endPoint, paths } from "./apiPath";
import { useLocation } from "react-router-dom";

// Set config defaults
export const axiosInstance = axios.create({
  baseURL: endPoint,
  headers: {
    "Content-Type": "application/json",
  },
  limit: "50mb",
  timeout: 30000,
});


let loading = false;
// const notifyLoadingState = (callback, state) => {
//   loading = state;
//   if (callback) callback(loading);
// };

const handleRequest = async (method, url, dataOrParams, onLoadingChange) => {
  try {
    // notifyLoadingState(onLoadingChange, true);

    let requestData = dataOrParams;
    let config = {
      method,
      url,
    };

    // Check if the payload is FormData
    if (dataOrParams instanceof FormData) {
      requestData.append("platform", "web"); // Add platform field directly to FormData
      config.data = requestData;
      config.headers = { "Content-Type": "multipart/form-data" }; // Override default Content-Type
    } else if (method === "get") {
      config.params = { ...dataOrParams, platform: "web" }; // For GET requests
    } else {
      config.data = { ...dataOrParams, platform: "web" };
    }

    const response = await axiosInstance(config);

    return response.data;
  } catch (error) {
    throw error;
  } finally {
    // notifyLoadingState(onLoadingChange, false);
  }
};

const useServiceAPI = {
  get: (url, params = {}, onLoadingChange = null) =>
    handleRequest("get", url, params, onLoadingChange),
  post: (url, data, onLoadingChange = null) =>
    handleRequest("post", url, data, onLoadingChange),
  put: (url, data, onLoadingChange = null) =>
    handleRequest("put", url, data, onLoadingChange),
  delete: (url, data = null, onLoadingChange = null) =>
    handleRequest("delete", url, data, onLoadingChange),

  isLoading: () => loading,
};

export default useServiceAPI;
