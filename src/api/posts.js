export const BASE_URL = "https://strangers-things.herokuapp.com";
export const key = "/2202-FTB-ET-WEB-FT";

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/api${key}/posts`);
  const { data } = await response.json();
  return data.posts;
};

export const newPost = async (
  token,
  title,
  description,
  price,
  willDeliver,
) => {
  const response = await fetch(`${BASE_URL}/api${key}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title,
        description,
        price,
        willDeliver,
      },
    }),
  });
   const data = await response.json();
  console.log(data, "data");
 
  return data;

};
