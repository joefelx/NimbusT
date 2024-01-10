const ToolReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_WRITER":
      return {
        writerOpen: true,
        templatesOpen: false,
        schedulerOpen: false,
        draftOpen: false,
      };

    case "OPEN_TEMPLATES":
      return {
        writerOpen: false,
        templatesOpen: true,
        schedulerOpen: false,
        draftOpen: false,
      };

    case "OPEN_SCHEDULER":
      return {
        writerOpen: false,
        templatesOpen: false,
        schedulerOpen: true,
        draftOpen: false,
      };
    case "OPEN_DRAFT":
      return {
        writerOpen: false,
        templatesOpen: false,
        schedulerOpen: false,
        draftOpen: true,
      };

    default:
      break;
  }
};

export default ToolReducer;
