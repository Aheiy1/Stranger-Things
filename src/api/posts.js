export const BASE_URL = "https://strangers-things.herokuapp.com";
export const key = "/2202-FTB-ET-WEB-FT";

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/api${key}/posts`);
  const { data } = await response.json();
  return data.posts;
};
