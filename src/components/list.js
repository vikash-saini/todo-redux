import React from "react";

// redux
import { deleteTask } from "../redux/actions/todoAction";
import { useDispatch } from "react-redux";
import CustormForm from "./form";

const List = ({ todolist }) => {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    console.log(id);
    dispatch(deleteTask(id));
  };
  return (
    <>
      <div className="w-50 mx-auto mt-4">
        <div>To Do List</div>
        <div>
          <ul>
            {todolist.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.task}</span>
                  <span className="ml-2" onClick={() => deleteItem(item.id)}>
                    x
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default List;
