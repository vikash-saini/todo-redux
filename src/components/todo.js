import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/todoAction";

const TODO = () => {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState();

  //   handle method
  const handleChange = (e) => {
    const val = e.target.value;
    setTask(val);
  };
  // submit method
  const submit = () => {
    dispatch({ type: "add", payload: task });
    setTask("");
  };
  const keyPress = (event) => {
    if (event.keyCode === 13) {
      dispatch(addTask(task));
      setTask("");
    }
  };
  return (
    <>
      <div className="w-50 m-auto">
        <Form.Label>Enter Task</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task"
          onKeyDown={keyPress}
          onChange={handleChange}
          value={task}
        />
        <Button className="mt-3" onClick={submit}>
          ADD
        </Button>
      </div>
    </>
  );
};
export default TODO;
