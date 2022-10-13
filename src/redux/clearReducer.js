export const clear = () => {
  // debugger;
  return {
    type: "CLEAR",
  };
};

export const show = () => {
  // debugger;
  return {
    type: "SHOW",
  };
};

// export const deleteSession = () => {
//   // debugger;
//   return {
//     type: "DEL_SESSION",
//   };
// };

const initialState = {
    // clear sttus
  status: false,
};

export const clearReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "CLEAR":
      // debugger;
      return {
        ...state,
        status: true,
      };
    case "SHOW":
      // debugger;
      return {
        ...state,
        status: false,
      };

    default:
      return state;
  }
};
