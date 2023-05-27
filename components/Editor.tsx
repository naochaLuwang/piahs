"use client";
import React from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// Create a dynamic import of ReactQuill component
const DynamicReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

// const modules = {
//   toolbar: [
//     [{ font: [] }],
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ color: [] }, { background: [] }],
//     [{ script: "sub" }, { script: "super" }],
//     ["blockquote", "code-block"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
//     ["link", "image", "video"],
//     ["clean"],
//   ],
//   clipboard: {
//     matchVisual: false,
//   },
// };

const modules = {
  toolbar: false,
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",

  "color",
  "background",
  "indent",
  "link",
  "image",
  "video",
  "align",
];

export function MyEditor({ onChange, content }: any) {
  return (
    <div className="h-auto mr-10 -ml-5">
      {/* Render the dynamic ReactQuill component */}

      <DynamicReactQuill
        value={content}
        modules={modules}
        // formats={formats}
        readOnly={true}
        className="bg-white react-quill-container ql-container ql-editor"
      />
    </div>
  );
}

export default MyEditor;
