import { Navigation } from "../component/Component";
import Tools from "../component/Tools";
import EditorBox from "../component/EditorBox";

function editor() {
  return (
    <>
      <Navigation />
      <div className="px-12">
        {/* <Editor /> */}
        <Tools />
        <EditorBox />
      </div>
    </>
  );
}

export default editor;
