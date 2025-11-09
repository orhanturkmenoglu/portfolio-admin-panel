import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1.0";


export const API_ENDPOINTS = {
    DASHBOARD:"/dashboard",
    ABOUT :"/abouts",
    PROJECT:"/projects",
    WORK:"/works",
    SKILL:"/skills"
}


export const addAbout= async(formData)=>{
   try {
      const response = await axios.post(
        `${BASE_URL + API_ENDPOINTS.ABOUT}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Connection error:", error);
    } 
}