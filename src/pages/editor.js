import { useContext, useEffect } from "react";
import { Navigation, Tools, EditorBox } from "../component/Component";
import { AuthContext } from "../context/AuthContext";

function editor() {
  const { checkUser } = useContext(AuthContext);

  useEffect(() => checkUser(), []);

  return (
    <div className="bg-black">
      <Navigation theme="black" />
      <div className="px-12">
        {/* <Editor /> */}
        <Tools />
        <EditorBox />
      </div>
    </div>
  );
}

export default editor;
