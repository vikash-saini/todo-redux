import { uuid } from "uuidv4";
const initalState = {
  newList: [{ id: 1, task: "Vikas" }],
};

export default function listReducer2(state = initalState, action) {
  // console.log(action);
  if (action.reducerType !== "list2") {
    return state;
  }
  // switch condition
  switch (action.type) {
    case "addUser": {
      const id = uuid();
      const newtask = { id: id, task: action.payload };
      const newState = {
        ...state,
        newList: [...state.newList, newtask],
      };

      return newState;
    }
    case "deleteUser": {
      const id = action.payload;
      const newState = state.newList.filter((item) => item.id !== id);
      return { ...state, newList: newState };
    }

    default:
      return state;
  }
}
