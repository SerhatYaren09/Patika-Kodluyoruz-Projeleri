import axios from "axios";

async function getData(user_id) {
  const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
  const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id);

  let info = { user, post };
  return info;
}

export default getData;