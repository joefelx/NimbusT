import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const auth = async () => {
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_REQUEST_URL}/user`,
      {
        username: id,
      }
    );
    window.localStorage.setItem("USER_ACCOUNT", JSON.stringify(result.data));
  };

  useEffect(() => {
    auth();
    router.push("/");
  }, [id]);
};

export default User;
