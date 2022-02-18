import axios from "axios";

const connect = (url = "", type = "GET", data = {}) => {
  let result;

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  api.interceptors.response.use(
    (res) => res,
    (error) => Promise.reject(JSON.parse(JSON.stringify(error)))
  );

  switch (type.toUpperCase()) {
    case "GET":
      result = api.get(url);
      break;
    case "POST":
      result = api.post(url, data);
      break;
    case "PATCH":
      result = api.patch(url, data);
      break;
    case "DELETE":
      result = api.delete(url);
      break;
    default:
      throw new Error("不支援此 method");
  }

  return result;
};

export default connect;
