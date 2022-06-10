import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyEditor() {
  const router = useRouter();
  const [blog, setBlog] = useState("");
  const editorRef = useRef(null);
  const editBlogHandler = () => {
    if (editorRef.current) {
      // console.log(editorRef.current.getContent());
      setBlog(editorRef.current.getContent());
    }
  };
  return (
    <>
      <button
        onClick={() => router.push("/")}
        className="hover:bg-blue-400 rounded-[100px] px-5 py-2 text-2xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Please Write the Heading in Bold and content in normal text</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <label
        class="block mb-2 text-xl font-large text-gray-00 dark:text-gray-900 m-4"
        for="file_input"
      >
        Upload Image
      </label>

      <input
        class="block w-full m-4 text-xl text-white-900 bg-blue-50 rounded-lg border border-white-300 cursor-pointer text-white-400 focus:outline-none dark:bg-blue-400 border-blue-300 placeholder-white-400  "
        id="file_input"
        type="file"
      ></input>
      <button
        className="block w-full m-4 text-xl text-white-900 bg-blue-50 rounded-lg border border-white-300 cursor-pointer text-white-400 focus:outline-none dark:bg-blue-400 border-blue-300 placeholder-white-400 "
        onClick={editBlogHandler}
      >
        <h1 className="text-white">Post Blog</h1>
      </button>
    </>
  );
}
