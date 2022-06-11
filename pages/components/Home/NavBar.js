import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  const id = 1;
  //   const userDatafetchHandler = async () => {
  //     // console.log(`in fetch ${searchedMovie}`)
  //     try {
  //       // console.log(id);

  //       const responseUser = await fetch(`http://0.0.0.0:8000/login/${id}`, {
  //         method: "GET", // or 'PUT'
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Credentials": "true",
  //           "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
  //         },
  //       });

  //       if (!responseUser.ok) {
  //         throw new Error("Something went wrong!");
  //       }

  //       const dataUser = await responseUser.json();

  //       // console.log(dataUser.user_name);

  //       const responsePost = await fetch(`http://0.0.0.0:8000/posts/${id}`, {
  //         method: "GET", // or 'PUT'
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //           "Access-Control-Allow-Credentials": "true",
  //           "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
  //         },
  //       });
  //       if (!responsePost.ok) {
  //         throw new Error("Something went wrong!");
  //       }
  //       const dataPost = await responsePost.json();
  //       console.log(dataPost.user_table_id);

  //       const blogDetails = [];

  //       blogDetails.push({
  //         userId: dataPost.user_table_id,
  //         userName: dataUser.user_name,
  //         title: dataPost.title_of_post,
  //         image: dataPost.image,
  //         content: dataPost.content,
  //         created_at: dataPost.created_at,
  //         // openingText  data.Search[c].Year,
  //         // releaseDate : data.Search[c].Year,
  //       });

  //       // console.log(blogDetails[0].userName);
  //       setBlogContent(blogDetails[0]);
  //     } catch (e) {}
  //   };
  return (
    <>
      <nav className="flex flex-wrap items-center justify-between p-6 bg-sky-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <span className="text-xl font-semibold tracking-tight">Beelog</span>
        </div>
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href={`components/PostBlog/${id}`}>
              <a className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
                Write
              </a>
            </Link>
          </div>
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                {/* <span className="sr-only">Open user menu</span> */}
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJEbNBW7WgMiqHuSO0OPtl8yxP218c-U-4Q&usqp=CAU"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={`components/MyProfile/${id}`}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </>
  );
}
