import ky from "ky";
const baseUrl = "https://litnet.herokuapp.com";

export const authenticateUser = async (email: string, password: string) => {
  const response: { token: string } = await ky
    .post(`${baseUrl}/auth/login`, {
      json: {
        email,
        password,
      },
    })
    .json();
  return response;
};

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const response: { token: string } = await ky
    .post(`${baseUrl}/auth/registration`, {
      json: {
        name,
        email,
        password,
      },
    })
    .json();
  return response;
};
