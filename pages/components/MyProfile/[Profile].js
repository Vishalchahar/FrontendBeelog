import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();
  const id = 2;
  const [isDelete, setIsDelete] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const [userPostsDetails, setUserPostsDetails] = useState([]);

  const deleteHandler = (pid) => {
    fetch(`http://0.0.0.0:8000/deletepost/${pid}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS, DELETE",
      },
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        console.log(data);
      });
    // setIsDelete(!isDelete);
    // console.log(data);
    fetchUserData();
  };

  const fetchUserData = async () => {
    try {
      const responseUser = await fetch(`http://0.0.0.0:8000/login/${id}`, {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
        },
      });

      if (!responseUser.ok) {
        throw new Error("Something went wrong!");
      }

      const dataUser = await responseUser.json();

      // console.log(dataUser.id);
      const responseProfile = await fetch(
        `http://0.0.0.0:8000/profile/${dataUser.id}`,
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
      if (!responseProfile.ok) {
        throw new Error("Something went wrong!");
      }
      const dataProfile = await responseProfile.json();
      // console.log(dataProfile);

      // console.log(dataUser.user_name);

      const responseUserPosts = await fetch(
        `http://0.0.0.0:8000/userposts/${id}`,
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

      const dataUserPosts = await responseUserPosts.json();
      const userDetails = [];
      const splitTime = dataProfile.created_at.split("T");
      // console.log(splitTime[0]);

      console.log(dataUserPosts);

      // console.log(dataUserPost);
      userDetails.push({
        userName: dataUser.user_name,
        firstName: dataProfile.first_name,
        lastName: dataProfile.last_name,
        desc: dataProfile.user_description,
        gender: dataProfile.gender,
        email: dataUser.email,
        created_at: splitTime[0],
        // openingText  data.Search[c].Year,
        // releaseDate : data.Search[c].Year,
      });
      const dataUserPost = [];

      dataUserPosts.map((item) => {
        const splitTimeblog = item.created_at.split("T");
        dataUserPost.push({
          id: item.id,
          title: item.title_of_post,
          image: item.image,
          // authorName: dataUser.user_name,
          created_at: splitTimeblog[0],
          // openingText  data.Search[c].Year,
          // releaseDate : data.Search[c].Year,
        });
      });

      // console.log(userDetails);
      setUserProfile(userDetails[0]);
      console.log(dataUserPost);
      setUserPostsDetails(dataUserPost);
    } catch (e) {}
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex flex-row flex-no-wrap justify-around mt-10">
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
        <img
          className="rounded-[100px] clear-left box-border h-20 w-20"
          src="https://st4.depositphotos.com/1012074/20946/v/450/depositphotos_209469984-stock-illustration-flat-isolated-vector-illustration-icon.jpg"
          alt="Sunset in the mountains"
        />
        {/* <div class="bg-white p-3 border-t-4 border-green-400"> */}
        <div class="image overflow-hidden">
          {/* <img class="h-auto w-full mx-auto"
                            src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                            alt=""> */}
          {/* </div> */}
          <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
            {userProfile.userName}
          </h1>
          <h3 class="text-gray-600 font-lg text-semibold leading-6">
            {userProfile.desc}
          </h3>
          {/* <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
            {}
          </p> */}
        </div>
        <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
          {/* <li class="flex items-center py-3"> */}
          {/* <span>Status</span> */}
          {/* <span class="ml-auto"> */}
          {/* <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                Active
              </span> */}
          {/* </span> */}
          {/* </li> */}
          <li className="flex items-center py-3">
            <span>Member since: </span>
            <span className="ml-2">{userProfile.created_at}</span>
          </li>
        </ul>
      </div>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span clas="text-green-500">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">First Name</div>
              <div className="px-4 py-2">{userProfile.firstName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Last Name</div>
              <div className="px-4 py-2">{userProfile.lastName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Gender</div>
              <div className="px-4 py-2">{userProfile.gender}</div>
            </div>
            {/* <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Contact No.</div>
              <div className="px-4 py-2">+11 998001001</div>
            </div> */}
            {/* <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Current Address</div>
              <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
            </div> */}
            {/* <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Permanant Address</div>
              <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
            </div> */}
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Email.</div>
              <div className="px-4 py-2">
                <a className="text-blue-800" href="mailto:jane@example.com">
                  {userProfile.email}
                </a>
              </div>
            </div>
            {/* <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">Birthday</div>
              <div className="px-4 py-2">Feb 06, 1998</div>
            </div> */}
          </div>
        </div>
        {/* <button class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
          Show Full Information
        </button> */}
      </div>
      {userPostsDetails.map((item) => {
        return (
          <>
            <div className="flex justify-self-auto flex-wrap">
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src={item.image}
                    />
                  </a>

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        {item.title}
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">{item.created_at}</p>
                  </header>

                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a
                      class="flex items-center no-underline hover:underline text-black"
                      href="#"
                    >
                      {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"> */}
                      {/* <p class="ml-2 text-sm">Mystry</p> */}
                    </a>

                    <a
                      class="no-underline text-grey-darker hover:text-red-dark"
                      href="#"
                    >
                      <button
                        onClick={() =>
                          router.push(`/components/EditBlog/${item.id}`)
                        }
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteHandler(item.id)}
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      >
                        Delete
                      </button>
                      <span class="hidden">Like</span>
                      <i class="fa fa-heart"></i>
                    </a>
                  </footer>
                </article>
              </div>
            </div>
          </>
        );
      })}

      {/* <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"></div>
      <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"></div> */}
      {/* <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"></div> */}
      {/* <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"></div> */}
    </>
  );
};

export default Profile;
