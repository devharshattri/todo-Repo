import axios from "axios";
export async function fetchData (repo) {
 const res  = await axios.get(
    `https://api.github.com/search/repositories?q=${repo}`
  );

return res.data.items
}