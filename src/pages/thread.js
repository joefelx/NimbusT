import { Editor, Navigation } from "../component/Component";
import Tool from "../component/Tool";
import EditorBox from "../component/EditorBox";
function editor() {
  return (
    <div>
      {/* <Editor /> */}
      <Navigation />
      <Tool />
      <EditorBox />
    </div>
  );
}

export default editor;
