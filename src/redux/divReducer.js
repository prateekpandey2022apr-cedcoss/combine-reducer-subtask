export const div = (num1, num2) => {
  // debugger;
  return {
    type: "DIV",
    num1,
    num2,
  };
};

// export const deleteSession = () => {
//   // debugger;
//   return {
//     type: "DEL_SESSION",
//   };
// };

const initialState = {
  result: "",
};

export const divReducer = (state = initialState, action) => {
//   debugger;
  switch (action.type) {
    case "DIV":
      // debugger;
      return {
        ...state,
        result: Number(action.num1) / Number(action.num2),
      };

    default:
      return state;
  }
};
