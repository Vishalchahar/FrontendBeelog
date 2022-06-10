import React from "react";
import classes from "./BlogDetails.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const BlogDetails = () => {
  const router = useRouter();
  const [blogContent, setBlogContent] = useState([]);

  const id = router.query.BlogDetails;

  const blogDetailsHandler = async () => {
    try {
      // console.log(id);
      const responsePost = await fetch(`http://0.0.0.0:8000/posts/${id}`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
        },
      });
      if (!responsePost.ok) {
        throw new Error("Something went wrong!");
      }
      const dataPost = await responsePost.json();
      console.log(dataPost.user_table_id);

      const responseUser = await fetch(
        `http://0.0.0.0:8000/login/${dataPost.user_table_id}`,
        {
          method: "GET", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
          },
        }
      );

      if (!responseUser.ok) {
        throw new Error("Something went wrong!");
      }

      const dataUser = await responseUser.json();

      // console.log(dataUser.user_name);

      const blogDetails = [];

      blogDetails.push({
        userName: dataUser.user_name,
        title: dataPost.title_of_post,
        image: dataPost.image,
        content: dataPost.content,
        created_at: dataPost.created_at,
        // openingText  data.Search[c].Year,
        // releaseDate : data.Search[c].Year,
      });

      // console.log(blogDetails[0].userName);
      setBlogContent(blogDetails[0]);
    } catch (e) {}
  };

  useEffect(() => {
    blogDetailsHandler();
  }, []);

  return (
    <div className={classes.card}>
      {/* <h1>{id}</h1> */}
      <button
        onClick={() => router.push("/")}
        className="mt-10 ml-10 hover:bg-blue-400 rounded-[100px] px-5 py-2 text-2xl "
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
      <div className="container mx-auto">
        <div className="px-6 py-4">
          <div className="flex flex-row">
            <img
              className="rounded-[100px] clear-left h-20 w-20"
              src="https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-stock-illustration-flat-isolated-vector-illustration-icon.jpg"
              alt="Sunset in the mountains"
            />
            <div className="text-4xl m-3">{blogContent.userName}</div>
          </div>
          <div className="font-bold text-5xl m-3">{blogContent.title}</div>
          <div>
            <img
              className="rounded-[50px] float-left mr-4 md-4"
              src={blogContent.image}
              alt="Sunset in the mountains"
            />
            <p className="text-gray-700 text-xl ml-2">{blogContent.content}</p>
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="flex flex-row inline-block bg-blue-200 hover:bg-blue-400 rounded-full px-2 py-1 text-2xl font-semibold text-gray-700">
            <svg class="w-10 h-10 fill-current" viewBox="0 0 20 20">
              <path
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div className="ml-2 text-4xl">21</div>
          </button>
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span> */}
          {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
