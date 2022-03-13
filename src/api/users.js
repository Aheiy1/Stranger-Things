import { BASE_URL, key } from "./posts";

export const fetchLoginResults = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/${key}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    });
    const data = await response.json();
    return data;

    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(response, "response");
    //     console.log(result);
    //   })return result
  } catch (error) {
    throw error;
  }
};
