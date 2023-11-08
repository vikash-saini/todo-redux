import React from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/todoAction";
import useCounter from "./useCounter";
import { bindActionCreators } from "redux";


const TODO = () => {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState();
  const [val, setVal] = React.useState();

  // custom hook
  const { count, increment, decrement } = useCounter();

  //   handle method
  const handleChange = (e) => {
    const val = e.target.value;
    setTask(val);
  };

  // submit method
  const submit = () => {
    dispatch({ type: "addUser", payload: task, reducerType: "list2" });
    setTask("");
  };
  const keyPress = (event) => {
    if (event.keyCode === 13) {
      dispatch(addTask(task));
      setTask("");
    }
  };
  function getHello() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("Hello2");
        res({
          msg: "I love you!",
        });
      }, 2000);
    });
  }
  async function handleAsync() {
    console.log("hello1");
    await getHello()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("hello3");
  }
  function sortArrOfObj(arr) {
    if (arr && arr.length > 0) {
      for (let j = 0; j < arr.length; j++) {
        for (let index = 0; index < arr.length; index++) {
          if (arr[j].repeatCount > arr[index].repeatCount) {
            let dd = arr[j];
            arr[j] = arr[index];
            arr[index] = dd;
          }
        }
      }
    }
    return arr;
  }

  function heightValIndex(arr) {
    var heighestVal;
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      for (var j = 0; j < arr.length; j++) {
        if (element < arr[j]) {
          break;
        }
      }
      if (j == arr.length) {
        heighestVal = element;
      }
    }
    console.log("heighest value: ", heighestVal);
    console.log("heighest value index: ", arr.indexOf(heighestVal));
    return arr.indexOf(heighestVal);
  }
  function findValue() {
    let newArr = [];
    let dataList = [
      "bbb",
      "ccc",
      "aaa",
      "aaa",
      "ccc",
      "aaa",
      "bbb",
      "ccc",
      "ccc",
    ];
    // find second most repeated value in array

    for (let index = 0; index < dataList.length; index++) {
      const element = dataList[index];
      var count = 0;
      for (let j = 0; j < dataList.length; j++) {
        if (element == dataList[j]) {
          count++;
        }
      }
      let newObj = {
        elem: element,
        repeatCount: count,
      };
      if (newArr.map((obj) => obj.elem).indexOf(element) == -1) {
        newArr.push(newObj);
      }
    }
    console.log(newArr);

    let nn = sortArrOfObj(newArr);
    console.log(nn);
    console.log("most repeated: ", newArr[0].elem);
    console.log("second most repeated: ", newArr[1].elem);
    setVal(newArr[1].elem);
  }
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
      <div className="w-50 m-auto">
        <Button className="mt-3" onClick={handleAsync}>
          call asyncronous fun
        </Button>
      </div>
      <div className="w-50 m-auto mt-2">
        From arr =[ "bbb", "ccc", "aaa", "aaa", "ccc", "aaa", "bbb", "ccc",
        "ccc", ]
        <Button className="mt-3" onClick={findValue}>
          find Second most repeated
        </Button>
        <p>{val && `Ans: ${val}`}</p>
      </div>
      <div className="w-50 m-auto mt-2">
        Counter
        <p>{count}</p>
        <Button className="mt-3" onClick={increment}>
          Increment
        </Button>
        <Button className="mt-3" onClick={decrement}>
          Decrement
        </Button>
        <p>{val && `Ans: ${val}`}</p>
      </div>
    </>
  );
};
export default TODO;
