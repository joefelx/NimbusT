import { HiTemplate, HiCalendar, HiAnnotation } from "react-icons/hi";

function Features() {
  return (
    <>
      <section>
        <div className="container  py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Exciting Features For You
          </h1>

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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
