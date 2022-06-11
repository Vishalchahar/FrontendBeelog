// import Head from "next/head";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// import { BlogDetails } from "./components/BlogDetails/[BlogDetails]";
// import { Profile } from "./components/MyProfile/[Profile]";
// import MyEditor from "./components/EditBlog/[EditBlog]";
// import PostBlog from "./components/PostBlog/MyEditor";
// import Home from "./components/Home/HomePage";
import { useEffect, useState } from "react";
import HomePage from "./components/Home/HomePage";
import NavBar from "./components/Home/NavBar";
import { Login } from "./components/Login/Login";
// import Modal from "./components/Modal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const fetchPostsHandler = async () => {
    setIsLoading(true);
    setError(null);
    // console.log(`in fetch ${searchedMovie}`)
    try {
      const response = await fetch(`http://0.0.0.0:8000/posts`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      // console.log(data);
      const loadedBlogs = [];
      // let c = 0;
      // console.log(data)
      // if (data.Response == "False") {
      //   // setError('Movie Not Found')
      //   throw new Error("Movie Not Found");
      // }
      // console.log(data.Search[0].imdbID)

      // console.log(data.Search[0])
      const splitTime = data[0].created_at.split("T");

      data.map((item) => {
        loadedBlogs.push({
          postId: item.id,
          title: item.title_of_post,
          image: item.image,
          created_at: splitTime[0],
          // openingText  data.Search[c].Year,
          // releaseDate : data.Search[c].Year,
        });
      });
      // console.log(loadedBlogs);

      // c++

      setBlogs(loadedBlogs);
      // console.log(blogs);
    } catch (error) {
      // console.log(error.message)
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPostsHandler();
  }, []);
  return (
    <>
      {/* <Login /> */}
      <NavBar />
      <div class="flex justify-self-auto flex-wrap">
        <HomePage allBlogs={blogs} />
      </div>
      {/* <BlogDetails /> */}
      {/* <Profile /> */}
      {/* <PostBlog /> */}
      {/* <MyEditor /> */}
    </>
  );
}
