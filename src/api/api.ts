// "use client";

import axiosInstance from "./axiosInstance";
import { setCookie } from "nookies";

const url = process.env.URL_BASE || "https://api.oowl.tech/api";

async function getUsers() {
  const response = await axiosInstance.get(url + "/user");
  return response.data;
}

async function createUser(data: {}) {
  const response = await axiosInstance.post(url + "/user", data);
  return response.data;
}

async function updateUser(id: string, data: {}) {
  const response = await axiosInstance.put(url + "/user/" + id, data);
  return response.data;
}

async function deleteUser(id: string) {
  const response = await axiosInstance.delete(url + "/user/" + id);
  return response.data;
}



export const api = { getUsers, createUser, updateUser, deleteUser };
