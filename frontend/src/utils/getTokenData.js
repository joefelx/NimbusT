import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export function getTokenData() {
  const token = Cookies.get("nimbus_token");
  if (!token) {
    const response = {
      tokenFound: false,
      data: "Token not found",
    };
    return response;
  } else {
    const { username, name } = jwt.verify(token, "hello world");
    const response = {
      tokenFound: true,
      data: {
        username,
        name,
        token,
      },
    };
    return response;
  }
}
