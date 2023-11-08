import { uuid } from "uuidv4";
export const initalState = {
  list: [{ id: 1, task: "wake early" }],
};

export default function listReducer(state = initalState, action) {
  // switch condition
  switch (action.type) {
    case "add": {
      const id = uuid();
      const newtask = { id: id, task: action.payload };
      const newState = {
        ...state,
        list: [...state.list, newtask],
      };

      return newState;
    }
    case "delete": {
      const id = action.payload;
      const newState = state.list.filter((item) => item.id !== id);
      return { ...state, list: newState };
    }

    default:
      return state;
  }
}
