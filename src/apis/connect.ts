import axios from "axios";
import store from "../store";

const connect = ({
  path = "",
  type = "GET",
  data = {},
  token = store.getState().token.value,
}) => {
  let result;

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  if (token) {
    api.interceptors.request.use(
      (res) => {
        if (res.headers) {
          res.headers["Authorization"] = `Bearer ${token}`;
        }
        return res;
      },
      (error) => Promise.reject(JSON.parse(JSON.stringify(error)))
    );
  }

  api.interceptors.response.use(
    (res) => res,
    (error) => Promise.reject(JSON.parse(JSON.stringify(error)))
  );

  switch (type.toUpperCase()) {
    case "GET":
      result = api.get(path);
      break;
    case "POST":
      result = api.post(path, data);
      break;
    case "PATCH":
      result = api.patch(path, data);
      break;
    case "DELETE":
      result = api.delete(path);
      break;
    default:
      throw new Error("不支援此 method");
  }

  return result;
};

export default connect;
