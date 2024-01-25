import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import { FunctionContext } from "../context/FunctionContext";
import { Navigation, Tools, EditorBox, Footer, LoginCard } from "../component";
import ThreadBox from "../component/ThreadBox";
import useAuth from "../hook/useAuth";

function editor() {
  const { threads, schedule, ScheduleThread } = useContext(FunctionContext);
  const { user, checkUser } = useAuth();

  const Scheduler = () => {
    const { threads, dispatch } = useContext(FunctionContext);

    const [date, setDate] = useState(new Date());
    const [title, setTitle] = useState(threads[0]);

    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-md fixed z-[500]">
        <div className="bg-black text-white text-md w-[30rem] min-h-56 h-auto p-5 flex flex-col justify-between border-2 border-slate-700 rounded-2xl">
          {/* Inputs */}
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-black border-2 border-slate-700 rounded-lg h-12 w-full px-2 my-1 focus:outline-none"
          />
          <input
            type="date"
            onChange={(e) => setDate(e.target.valueAsDate)}
            className="bg-black border-2 border-slate-700 rounded-lg h-12 w-full px-2 my-1 focus:outline-none"
          />

          {/* Divider */}
          <hr className="w-full my-5 border-t-2 border-slate-700" />

          {/* Buttons */}
          <div className="flex flex-col justify-between items-center w-full">
            <button
              className="w-full border-2 border-slate-700 bg-indigo-600 hover:bg-indigo-500 rounded-xl p-2 my-1"
              onClick={() => ScheduleThread(title, date)}
            >
              Submit
            </button>
            <button
              className="w-full border-2 border-slate-700 bg-black hover:bg-slate-900 rounded-xl p-2 my-1"
              onClick={() => dispatch({ type: "SET_SCHEDULE", payload: false })}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="bg-black text-white px-12">
      {!user && <LoginCard />}
      {schedule && <Scheduler />}
      <Toaster />
      <Navigation />
      <div className="w-full flex justify-between h-screen">
        <div className="w-1/2 flex flex-col">
          <Tools />
          <EditorBox />
        </div>

        <div className="w-1/2 flex flex-col flex-1 items-center px-5 overflow-scroll">
          {/* thread detail */}
          {threads.map((t) => {
            if (t === "") {
              return "";
            }
            return <ThreadBox user={user} thread={t} imageURL="" />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default editor;
