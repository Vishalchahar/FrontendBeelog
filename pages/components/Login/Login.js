import React from "react";

const Login = () => {
  return (
    <div>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://wallpaperaccess.com/full/2534978.jpg"
                class="rounded-[20px] w-full"
                alt="Sample image"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div class="flex flex-row items-center justify-center lg:justify-start">
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  />{" "}
                  {/* </svg> */}
                </div>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <h1 className="mx-4 mb-0 text-3xl font-bold text-center md-5">
                    Beelog
                  </h1>
                </div>
                {/* <!--users--!> */}

                <div class="flex my-10 ">
                  <button class="inline-block px-7 py-3 bg-sky-300 text-white w-1/4 mx-6 font-medium text-s leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    <div class="flex justify-center -mt-8">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" class="rounded-full h-full"/>
                    </div>
                    <div class="text-center px-3 pb-6 pt-2">
                      <h3 class="text-white text-sm bold font-sans">COGO VISHAL</h3>
	                  </div>
                  </button>
                
                
                  <button class="inline-block px-7 py-3 bg-sky-300 text-white w-1/4 mx-6  font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    <div class="flex justify-center -mt-8">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" class="rounded-full"/>
                    </div>
                    <div class="text-center px-3 pb-6 pt-2">
                      <h3 class="text-white text-sm bold font-sans">COGO CHARAN</h3>
	                  </div>
                  </button>
                
                
                  <button class="inline-block px-7 py-3 bg-sky-300 text-white w-1/4 mx-6  font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    <div class="flex justify-center -mt-8">
                      <img src="https://static.vecteezy.com/system/resources/thumbnails/000/550/980/small/user_icon_001.jpg" class="rounded-full"/>
                    </div>
                    <div class="text-center px-3 pb-6 pt-2">
                      <h3 class="text-white text-sm bold font-sans">COGO ABHI</h3>
	                  </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
