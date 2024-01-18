import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export function getTokenData() {
  const token = Cookies.get("nimbus_token");
  const decodedToken = jwt.verify(token, "hello world");
  return decodedToken;
}
