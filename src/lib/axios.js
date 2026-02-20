import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    // "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from storage
    const token = localStorage.getItem('token'); // Adjust the key as necessary
    console.log("token", token)

    // If a token exists, add it to the headers
    if (token) {
      // Ensure config.headers exists
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);


export { axiosInstance };