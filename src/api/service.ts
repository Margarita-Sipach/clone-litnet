import { API } from "./api";

export const registerUser = async (body: any) => {
  const response = await API.registerUser(body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) =>
      rej("User with this email or name exists")
    );
  }
};

export const loginUser = async (body: any) => {
  const response = await API.loginUser(body);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("Incorrect email or password"));
  }
};

export const getUserById = async (id: string) => {
  const response = await API.getUserById(id);
  if (response.ok) {
    return response.json();
  } else {
    return new Promise((res, rej) => rej("User with such id didn't found"));
  }
};
