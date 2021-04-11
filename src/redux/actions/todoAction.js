import { uuid } from "uuidv4";

// add task
export const addTask = (task) => {
  return {
    type: "add",
    payload: task,
  };
};

// delete task
export const deleteTask = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};
