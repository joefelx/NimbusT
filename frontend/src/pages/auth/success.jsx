import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

function success() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("nimbus_token");

  useEffect(() => {
    Cookies.set("nimbus_token", token);
    router.push("/");
  }, [token]);
}

export default success;
