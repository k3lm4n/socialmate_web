import axios from "axios";

const url = "http://localhost:3000/api";

async function getUsers() {
  const response = await axios.get(url + "/user");
  return response.data;
}

async function createUser(data: {}) {
  const response = await axios.post(url + "/user", data);
  return response.data;
}

async function updateUser(id: string, data: {}) {
  const response = await axios.put(url + "/user/" + id, data);
  return response.data;
}

async function deleteUser(id: string) {
  const response = await axios.delete(url + "/user/" + id);
  return response.data;
} 

async function authUser ({email, password}: {email: string, password: string}) {
  const response = await axios.post(url + "/auth", {email, password});
  return response.data;
}



export const api = { getUsers, createUser, updateUser, deleteUser, authUser };