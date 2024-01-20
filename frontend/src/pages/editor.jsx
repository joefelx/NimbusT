import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Navigation, Tools, EditorBox, Footer, LoginCard } from "../component";
import { AuthContext } from "../context/AuthContext";
import { FunctionContext } from "../context/FunctionContext";
import useAuth from "../hook/useAuth";

function editor() {
  const { schedule, ScheduleThread } = useContext(FunctionContext);
  const [user, checkUser] = useAuth();

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
    if (user === null) {
      checkUser();
    }
  }, []);

  return (
    <div className="bg-black text-white">
      {!user && <LoginCard />}
      {schedule && <Scheduler />}
      <Toaster />
      <Navigation />
      <div className="px-12">
        <Tools />
        <div className="rounded-2xl border-2 border-slate-700 overflow-hidden">
          <EditorBox />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default editor;
