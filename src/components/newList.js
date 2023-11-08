import React from "react";
// redux
import { deleteTask } from "../redux/actions/todoAction";
import { connect } from "react-redux";
const NewListComponent = ({ newList, dispatchCall }) => {
  const deleteItem = (id) => {
    console.log(id);
    // using dispatch method from connect
    dispatchCall({ type: "delete", payload: id, reducerType: "list2" });
  };
  // console.log(newList);
  return (
    <>
      <div className="w-50 mx-auto mt-4">
        <div>Using state and dispatch method as props with connect</div>
        <div>
          <ul>
            {newList.map((item, index) => {
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

const mapStateToProps = (state) => {
  // console.log(state);
  return { newList: state.newList.newList };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatchCall: dispatch };
};

// ##Note: If you don't specify the second argument to connect(), your component will receive dispatch by default
export default connect(mapStateToProps, mapDispatchToProps)(NewListComponent);
