import { useContext, useEffect } from "react";
import { Navigation, Tools, EditorBox, Footer } from "../component/Component";
import { AuthContext } from "../context/AuthContext";

function editor() {
  const { checkUser } = useContext(AuthContext);

  useEffect(() => checkUser(), []);

  return (
    <div className="bg-black text-white">
      <Navigation />
      <div className="px-12">
        <div className="h-auto py-10">
          <h1 className="text-2xl ">
            loreDo Lorem irure duis consequat nulla labore amet deserunt id
            tempor eu.
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
