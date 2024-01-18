import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import { AuthContext } from "../context/AuthContext";

import ProfileImg from "../assets/profile.jpg";
import Navigation from "../component/Navigation";

const User = () => {
  const { user, checkUser } = useContext(AuthContext);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen h-full w-full">
      <Navigation />
      <section className="h-[40vh] border-b-2 border-slate-600 ">
        <div className="h-full flex items-center justify-center">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              className="w-full object-cover"
              src={ProfileImg}
              alt="profile"
            />
          </div>
          <div className="mx-5">
            <h1 className="text-2xl">{user?.name}</h1>
            <h1 className="text-slate-500">{user?.username}</h1>
          </div>
        </div>
      </section>
      <section className="bg-black h-full">
        <div className="py-4 px-4 md:px-8 bg-black">
          <ul
            role="tablist"
            className="hidden max-w-screen-xl mx-auto px-2.5 items-center gap-x-3 overflow-x-auto text-sm bg-gray-50 dark:bg-slate-800 rounded-lg sm:flex"
          >
            <li className="py-2">
              <button
                role="tab"
                className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-500 hover:bg-white active:bg-white/50 font-medium bg-white text-indigo-500 shadow-sm"
              >
                Threads
              </button>
            </li>

            <li className="py-2">
              <button
                role="tab"
                className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-500 hover:bg-white active:bg-white/50 font-medium text-gray-500 dark:text-gray-300 dark:hover:text-indigo-800"
              >
                plans
              </button>
            </li>
          </ul>
          <div className="relative text-gray-500 sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
            <select className="p-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-indigo-500">
              <option>Overview</option>
              <option>Integration</option>
              <option>Billing</option>
              <option>Transactions</option>
              <option>plans</option>
            </select>
          </div>
        </div>
      </section>

      {/* cards */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {tweets.map((item) => (
          <div
            key={item.id}
            className="rounded overflow-hidden shadow-lg dark:shadow-gray-800"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">heading</div>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {/* {item.description.substring(0, 100)} */}
                description
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {/* {item.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
              >
                {tag}
              </span>
            ))} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
