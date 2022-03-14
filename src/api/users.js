import { BASE_URL, key } from "./posts";

export const fetchLoginResults = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api${key}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export const registerUser = async (username, password) => {
  const response = await fetch(`${BASE_URL}/api${key}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
