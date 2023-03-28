const ToolReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_EDITOR":
      return {
        editorOpen: true,
        templatesOpen: false,
        calendarOpen: false,
        draftOpen: false,
      };

    case "OPEN_TEMPLATES":
      return {
        editorOpen: false,
        templatesOpen: true,
        calendarOpen: false,
        draftOpen: false,
      };

    case "OPEN_CALENDAR":
      return {
        editorOpen: false,
        templatesOpen: false,
        calendarOpen: true,
        draftOpen: false,
      };
    case "OPEN_DRAFT":
      return {
        editorOpen: false,
        templatesOpen: false,
        calendarOpen: false,
        draftOpen: true,
      };

    default:
      break;
  }
};

export default ToolReducer;
