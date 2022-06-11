import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HomePage(props) {
  const router = useRouter();

  const id = 1;
  // console.log(props.allBlogs[0]);

  return props.allBlogs.map((blog) => {
    return (
      <Link href={`components/BlogDetails/${blog.postId}`}>
        <div class="object-contain my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article class="overflow-hidden shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="object-contain h-60 w-full"
                src={blog.image}
              />
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <a
                  class="inline no-underline hover:underline text-black"
                  href="#"
                >
                  {blog.title}
                </a>
              </h1>
              <p class="text-grey-darker text-sm">{blog.created_at}</p>
            </header>

            <footer class="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <p class="ml-2 text-sm"></p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>
      </Link>
    );
  });
}
