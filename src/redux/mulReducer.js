export const mul = (num1, num2) => {
  // debugger;
  return {
    type: "MUL",
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

export const mulReducer = (state = initialState, action) => {
//   debugger;
  switch (action.type) {
    case "MUL":
      // debugger;
      return {
        ...state,
        result: Number(action.num1) * Number(action.num2),
      };

    default:
      return state;
  }
};
