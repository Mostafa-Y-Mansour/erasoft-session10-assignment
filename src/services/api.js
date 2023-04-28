import axios from "axios";

const BASE_URL = "http://localhost:9000";

export const GetAllBooks = () => {
  return axios.get(`${BASE_URL}/books`);
};

export const GetBook = (id) => {
  return axios.get(`${BASE_URL}/books/${id}`);
};

export const AddBook = (book) => {
  return axios.post(`${BASE_URL}/books/`, book);
};

export const EditBook = (id, book) => {
  return axios.put(`${BASE_URL}/books/${id}`, book);
};

export const DeleteBook = (id) => {
  return axios.delete(`${BASE_URL}/books/${id}`);
};
