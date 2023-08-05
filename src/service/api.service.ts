import { AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance.service";

//: Promise<AxiosResponse<any>>
export const getAgents = (): Promise<AxiosResponse<any>> => {
  return axiosInstance.get("/api/characters");
};
