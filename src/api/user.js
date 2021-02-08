import axios from "axios";

export const getUserList = async (params) => {
  try {
    return await axios.get("https://randomuser.me/api", {
      params,
    });
  } catch (error) {
    console.error(error);
  }
};
