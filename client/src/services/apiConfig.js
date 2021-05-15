import axios from "axios";

// const production = "https://heroesrest-api.herokuapp.com/";
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

export const createUser = async (formData) => {
  const res = await api.post("/users", { user: formData });
  return res.data;
};

// FOR CHARACTERS
export const getAllCharacters = async () => {
  const res = await api.get(`/characters`);
  return res.data;
};

export const getOneCharacter = async (id) => {
  const res = await api.get(`/characters/${id}`);
  return res.data;
};

export const createCharacter = async (formData) => {
  const res = await api.post("/characters", formData);
  return res.data;
};

// FOR POSTS
export const getAllPosts = async () => {
  const res = await api.get(`/posts`);
  return res.data;
};

export const getOnePost = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

export const createPost = async (formData) => {
  const res = await api.post("/posts", { post: formData });
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
  const res = await api.post("/comments", { comment: formData });
  return res.data;
};
