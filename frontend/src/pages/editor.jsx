import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Navigation, Tools, EditorBox, Footer, LoginCard } from "../component";
import { AuthContext } from "../context/AuthContext";
import { FunctionContext } from "../context/FunctionContext";

function editor() {
  const { user, checkUser } = useContext(AuthContext);
  const { schedule, dispatch } = useContext(FunctionContext);

  const Scheduler = ({ dispatch }) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      console.log(date.toISOString());
    }, [date]);
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent backdrop-blur-md fixed z-[500]">
        <div className="bg-black text-white w-[30rem] p-10 flex flex-col items-center justify-center border-2 border-slate-700 rounded-2xl">
          <div>
            <span>Title</span>
            <input type="text" />
          </div>
          <div>
            <span>Date</span>
            <input type="date" onChange={(e) => setDate(e)} />
          </div>
          <div>
            <button
              onClick={() => dispatch({ type: "SET_SCHEDULE", payload: false })}
            >
              Cancel
            </button>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => checkUser(), []);

  return (
    <div className="bg-black text-white">
      {!user && <LoginCard />}
      {schedule && <Scheduler dispatch={dispatch} />}
      <Toaster />
      <Navigation />
      <div className="px-12">
        <div className="h-auto py-10 text-center">
          <h1 className="text-4xl font-bold">
            Craft captivating Threads effortlessly with our user-friendly
            Editor!
          </h1>
          <p className="text-indigo-600 text-xl italic mt-5">
            Use ^ to make new thread
          </p>
        </div>
        {/* <Editor /> */}
        <div className="rounded-2xl border-2 border-slate-700 overflow-hidden">
          <Tools />
          <EditorBox />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default editor;
