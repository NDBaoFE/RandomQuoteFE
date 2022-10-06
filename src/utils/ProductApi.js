import { get } from "./ApiCaller";
const ukey = "KxMlwWkbvjexNyYV0ZaorO_FYCrjd1tvPBIsrYkkstA";
const productApi = {
  getImg: () => {
    const url = `/photos/random/?client_id=${ukey}`;
    return get("https://api.unsplash.com", url);
  },
  getQoute: () => {
    const url = `/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    return get("https://gist.githubusercontent.com/", url);
  },
};

export default productApi;
