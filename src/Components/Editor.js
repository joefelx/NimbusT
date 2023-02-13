import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo-individual transparent.png";
import ProfileImg from "../assets/profile.jpg";
import Image from "next/image";
import TextField from "./TextField";

// export default function App() {
//   const editorRef = useRef(null);
//   const [text, setText] = useState("");
//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };
//   //   useEffect(() => {
//   //     console.log(editorRef.current.getContent());
//   //   }, [editorRef.current.getContent()]);
//   return (
//     <>
//       <Editor
//         apiKey="fmlybxuzep083lydfah7vcyxk3d95r1emmf94dv8a2jqw114"
//         onInit={(evt, editor) => {
//           editorRef.current = editor;
//         }}
//         initialValue={"hello"}
//         init={{
//           height: 500,
//           editable_class: "mceEditable",
//           width: 500,
//           inline: false,
//           resize: false,
//           menubar: false,
//           skin: "oxide",
//           plugins: [
//             "advlist",
//             "autolink",
//             "lists",
//             "link",
//             "image",
//             "charmap",
//             "preview",
//             "anchor",
//             "searchreplace",
//             "visualblocks",
//             "code",
//             "fullscreen",
//             "insertdatetime",
//             "media",
//             "table",
//             "code",
//             "help",
//             "wordcount",
//           ],
//           toolbar:
//             "undo redo | blocks | " +
//             "bold italic forecolor | alignleft aligncenter " +
//             "alignright alignjustify | bullist numlist outdent indent | " +
//             "removeformat | help",
//           content_style:
//             "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//         }}
//       />
//       <button onClick={log}>Log editor content</button>

//       <h1>{text}</h1>
//       <p>{"\u2022"}</p>
//     </>
//   );
// }

function Editor() {
  return (
    <div className="h-auto min-h-screen w-100% bg-black text-white p-5 flex justify-between">
      <div className=" border-r-2 pr-5 border-[#6F6F6F] ">
        <Image src={Logo} width={30} height={30} />
      </div>
      {/* Editor */}
      <div className="flex-1 flex border-r-2">
        <div className="rounded-full overflow-hidden w-12 h-12">
          <Image src={ProfileImg} className="object-cover" />
        </div>
        <TextField />
      </div>
      {/* Preview */}
      <div className=" block flex-1"></div>
    </div>
  );
}

export default Editor;
