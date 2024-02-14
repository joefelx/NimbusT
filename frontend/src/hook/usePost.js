import { PostContext } from "../context/PostContext";
import useAuth from "./useAuth";
import { useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { mergeText, splitText } from "@/utils/utils";

const usePost = () => {
  const { initial, input, mergedInput, threads, draftThreads, schedule, templates, postDispatch } =
    useContext(PostContext);
  const { user } = useAuth();
  const date = new Date();


  const NEXT_PUBLIC_REQUEST_URL = process.env.NEXT_PUBLIC_REQUEST_URL;

  const PostThread = async () => {
    await toast.promise(
      axios.post(
        `${NEXT_PUBLIC_REQUEST_URL}/post/thread`,
        {
          userId: user.id,
          username: user.username,
          title: threads.filter(Boolean)[0],
          threads: threads.filter(Boolean),
          scheduled: false,
          date: date.toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      ),
      {
        loading: "Posting the Thread...",
        success: "Posted! Go and check the X platform",
        error: "Couldn't post!",
      }
    );
  };

  const ScheduleThread = async (title, date) => {
    await toast.promise(
      axios.post(
        `${process.env.NEXT_PUBLIC_REQUEST_URL}/post/schedule`,
        {
          userId: user.id,
          username: user.username,
          title: title,
          threads: threads.filter(Boolean),
          scheduled: true,
          date: date.toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      ),
      {
        loading: "Saving the Thread...",
        success: "Saved the Thread. Check the Scheduled Section!",
        error: "Couldn't Save the thread",
      }
    );

    postDispatch({ type: "SET_SCHEDULE", payload: false });
  };

  const GetThread = async () => {
    const receivedThreads = await axios.post(
      `${NEXT_PUBLIC_REQUEST_URL}/post`,
      {
        userId: user.id,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    postDispatch({
      type: "SET_DRAFT_THREAD",
      payload: receivedThreads.data.allPosts,
    });
  };

  const DeleteThread = async () => { };

  const FormatInput = (input) => {
    const splittedTextArray = splitText(input)
    let mergedText = "";

    splittedTextArray.forEach(w => {
      mergedText += mergeText(w)
    })

    const mergedTextArray = splitText(mergedText)

    postDispatch({ type: "SET_MERGED_INPUT", payload: mergedText });
    postDispatch({ type: "SET_THREAD", payload: mergedTextArray.filter(Boolean) });

  }

  return {
    input,
    threads,
    draftThreads,
    schedule,
    templates,
    PostThread,
    ScheduleThread,
    GetThread,
    FormatInput,
    postDispatch,
  };
};

export default usePost;
