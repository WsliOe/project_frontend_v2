import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/users";

const API_ENDPOINTS = {
  SIGNUP: `${API_URL}/signup`,
  LOGIN: `${API_URL}/login`,
  ME: `${API_URL}/me`,
  LOGOUT: `${API_URL}/logout`,
  UPDATEME: `${API_URL}/updateMe`,
};

export async function signup({ email, password }) {
  const { data, error } = await axios.post(API_ENDPOINTS.SIGNUP, {
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await axios.post(
    API_ENDPOINTS.LOGIN,
    {
      email,
      password,
    },
    { withCredentials: true }
  );

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data, error } = await axios.get(API_ENDPOINTS.ME, {
    withCredentials: true,
  });

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await axios.post(API_ENDPOINTS.LOGOUT);
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName }) {
  let updateData = {};
  if (password) updateData.password = password;
  if (fullName) updateData.fullName = fullName;

  const { data, error } = await axios.patch(API_ENDPOINTS.UPDATEME, updateData);

  if (error) throw new Error(error.message);

  return data;
}
