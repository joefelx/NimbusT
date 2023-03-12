import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const auth = async () => {
    const result = await axios.post("http://localhost:5000/user", {
      username: id,
    });
    window.localStorage.setItem("USER_ACCOUNT", JSON.stringify(result.data));
  };

  useEffect(() => {
    auth();
    router.push("/");
  }, [id]);
};

export default User;
