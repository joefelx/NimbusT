import { HiTemplate, HiCalendar, HiAnnotation } from "react-icons/hi";

function Features() {
  return (
    <>
      <section>
        <div className="container  py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Exciting Features For You
          </h1>
          {/* <p className="mt-2 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p> */}

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="space-y-3">
              <span className="inline-block p-3 text-indigo-600 bg-indigo-100 rounded-full dark:text-white dark:bg-indigo-500">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg> */}
                <HiTemplate className="w-6 h-6" />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Easy Templates
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Make a professional thread with a predefined templates
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-indigo-600 capitalize transition-colors duration-300 transform dark:text-indigo-500 hover:underline hover:text-indigo-700 dark:hover:text-indigo-600"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-indigo-600 bg-indigo-100 rounded-full dark:text-white dark:bg-indigo-500">
                <HiCalendar className="w-6 h-6" />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Thread Scheduler
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Schedule the thread at a particular time and post it later
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-indigo-600 capitalize transition-colors duration-300 transform dark:text-indigo-500 hover:underline hover:text-indigo-700 dark:hover:text-indigo-600"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="space-y-3">
              <span className="inline-block p-3 text-indigo-600 bg-indigo-100 rounded-full dark:text-white dark:bg-indigo-500">
                <HiAnnotation className="w-6 h-6" />
              </span>

              <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                Get Your Stats Every month
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Get the info of your Growth and Plan for the months
              </p>

              <a
                href="#"
                className="inline-flex items-center -mx-1 text-sm text-indigo-600 capitalize transition-colors duration-300 transform dark:text-indigo-500 hover:underline hover:text-indigo-700 dark:hover:text-indigo-600"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="w-4 h-4 mx-1 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
