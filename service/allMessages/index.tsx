import axios from "axios";
import { baseUrl } from "../../utils/constant";

export const getAllMessage = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/messages`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const getSingleMessage = async (id: any) => {
  try {
    const res = await axios.get(`${baseUrl}/api/messages/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
export const ReadMessage = async (id: any) => {
  try {
    const res = await axios.put(`${baseUrl}/api/messages/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
