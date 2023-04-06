import { useContext, useEffect } from "react";
import {
  Navigation,
  Tools,
  EditorBox,
  Footer,
  LoginCard,
  Banner,
} from "../component/Component";
import { AuthContext } from "../context/AuthContext";
import { FunctionContext } from "../context/FunctionContext";

function editor() {
  const { user, checkUser } = useContext(AuthContext);
  const { useBanner } = useContext(FunctionContext);

  useEffect(() => checkUser(), []);
  useEffect(() => console.log(useBanner), [useBanner]);

  return (
    <div className="bg-black text-white">
      {/* {!user && <LoginCard />} */}
      {useBanner.show && <Banner sign={useBanner.message} />}
      {/* <Banner sign="information" /> */}
      <Navigation />
      <div className="px-12">
        <div className="h-auto py-10 text-center">
          <h1 className="text-4xl font-bold">
            Craft captivating Threads effortlessly with our user-friendly
            Editor!
          </h1>
          <p className="text-indigo-600 text-xl italic mt-5">
            Use ^ to make new thread
          </p>
        </div>
        {/* <Editor /> */}
        <Tools />
        <EditorBox />
        <Footer />
      </div>
    </div>
  );
}

export default editor;
