export const add = (num1, num2) => {
  // debugger;
  return {
    type: "ADD",
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

export const addReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case "ADD":
      // debugger;
      return {
        ...state,
        result: Number(action.num1) + Number(action.num2),
      };

    default:
      return state;
  }
};
