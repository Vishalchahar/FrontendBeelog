import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyEditor() {
  const router = useRouter();
  const [blog, setBlog] = useState("");
  const [img, setImg] = useState("");
  const editorRef = useRef(null);
  const [titleBlog, setTitleBlog] = useState("");
  const id = router.query.MyEditor;

  const imgLink =
    "https://vishwaentertainers.com/wp-content/uploads/2020/04/No-Preview-Available.jpg";

  const titleHandler = (e) => {
    setTitleBlog(e.target.value);
  };

  const imageFileHandler = (e) => {
    setImg(e.target.value);
  };

  const editBlogHandler = async () => {
    if (editorRef.current) {
      // console.log(editorRef.current.getContent());
      const cont = editorRef.current.getContent();
      const splitCont = cont.split(/(<p>)/);
      const finalSplit = splitCont[2].split("<");
      setBlog(finalSplit[0]);
      // console.log(finalSplit[0]);
      // setBlog(editorRef.current.getContent());
    }

    const res = await fetch("http://0.0.0.0:8000/createpost", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
      },
      body: JSON.stringify({
        user_table_id: id,
        title_of_post: titleBlog,
        content: blog,
        image: img == "" ? imgLink : img,
      }),
    });

    const data = await res.text();

    console.log(data);
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
      <div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
          for="grid-password"
        >
          Enter Your Title
        </label>
        <input
          onChange={titleHandler}
          class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          type="text"
          required
        />
      </div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>How vain it is to sit down to write when you have not stood up to live.</p>"
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
        onChange={imageFileHandler}
      ></input>
      <button
        className="block w-full m-4 text-xl border border-blue-300 rounded-lg cursor-pointer text-white-900 bg-blue-50 border-white-300 text-white-400 focus:outline-none dark:bg-blue-400 placeholder-white-400 "
        onClick={editBlogHandler}
      >
        <h1 className="text-white">Post Blog</h1>
      </button>
    </>
  );
}
