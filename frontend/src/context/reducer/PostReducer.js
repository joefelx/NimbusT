const PostReducer = (state, action) => {
  switch (action.type) {
    case "SET_INITIAL":
      return {
        ...state,
        initial: false,
      };
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      };
    case "SET_MERGED_INPUT":
      return {
        ...state,
        mergedInput: action.payload,
      };
    case "SET_THREAD":
      return {
        ...state,
        threads: action.payload,
      };
    case "SET_CURRENT_THREAD":
      return {
        ...state,
        currentThread: action.payload,
      };
    case "SET_DRAFT_THREAD":
      return {
        ...state,
        draftThreads: action.payload,
      };

    case "SET_SCHEDULE":
      return {
        ...state,
        schedule: action.payload,
      };

    case "SET_TEMPLATES_LIST":
      return {
        ...state,
        templates: action.payload,
      };

    default:
      break;
  }
};

export default PostReducer;
