import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export function getTokenData() {
  const token = Cookies.get("nimbus_token");
  const { username, name } = jwt.verify(token, "hello world");
  return {
    username,
    name,
    token,
  };
}
