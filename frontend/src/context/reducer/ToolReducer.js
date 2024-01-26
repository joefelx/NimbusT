const ToolReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_WRITER":
      return {
        writerOpen: true,
        templatesOpen: false,
        schedulerOpen: false,
      };

    case "OPEN_TEMPLATES":
      return {
        writerOpen: false,
        templatesOpen: true,
        schedulerOpen: false,
      };

    case "OPEN_SCHEDULER":
      return {
        writerOpen: false,
        templatesOpen: false,
        schedulerOpen: true,
      };

    default:
      break;
  }
};

export default ToolReducer;
