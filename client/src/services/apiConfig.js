import axios from "axios";

// const production = "https://heroesrest-api.herokuapp.com/";
//eslint-disable-next-line
const baseUrl = "https://localhost:3000";
let apiUrl;

const apiUrls = {
  development: "http://localhost:3000",
  production: "https://heroesrest-api.herokuapp.com/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});
// Conditional logic to set between localhost and production

// FOR USERS
export const getAllUsers = async () => {
  const res = await api.get(`/users`);
  return res.data;
};

export const getOneUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

export const signIn = async (formData) => {
  const res = await api.post("/signin", formData);
  return res.data;
};
// Checks username and password.

export const createUser = async (formData) => {
  const res = await api.post("/users", formData);
  return res.data;
};

// FOR CHARACTERS
export const getAllCharacters = async () => {
  const res = await api.get(`/users/characters`);
  return res.data;
};

export const getOneCharacter = async (user_id) => {
  const res = await api.get(`/users/${user_id}/characters/`);
  return res.data;
};

export const createCharacter = async (id, formData) => {
  const res = await api.post(`/users/${id}/characters`, formData);
  return res.data;
};

// FOR POSTS
export const getAllPosts = async () => {
  const res = await api.get(`users/characters/posts`);
  return res.data;
};

export const getOnePost = async (id) => {
  const res = await api.get(`/user/${id}/characters/${id}/posts/${id}`);
  return res.data;
};

export const createPost = async (user_id, character_id, formData) => {
  const res = await api.post(
    `/users/${user_id}/characters/${character_id}/posts`,
    formData
  );
  return res.data;
};

export const updatePost = async (id, formData) => {
  const res = await api.put(`/users/${id}/characters/${id}/posts`, formData);
  return res.data;
};

export const deletePost = async (id) => {
  const res = await api.delete(`/users/${id}/characters/${id}/posts/${id}`);
  return res.data;
};

// FOR COMMENTS
export const getAllComments = async () => {
  const res = await api.get(`/comments`);
  return res.data;
};

export const getOneComment = async (id) => {
  const res = await api.get(`/comments/${id}`);
  return res.data;
};

export const createComment = async (formData) => {
  const res = await api.post("/comments", formData);
  return res.data;
};
