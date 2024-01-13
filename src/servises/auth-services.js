import axios from "axios";

const instance = axios.create({
  baseUrl: "https://api.escuelajs.co/api/v1",
});

export const singUp = async (body) => {
  return await instance.post("/user/", body);
};
