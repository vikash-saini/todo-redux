import React from "react";
import { Form, Button } from "react-bootstrap";

function CustormForm() {
  const [credit, setCredit] = React.useState();
  const [mobile, setMobile] = React.useState();

  //   handle method
  const handleChangeCredit = (e) => {
    const val = e.target.value;
    let str1 = val.substr(0, 3);
    let str2 = val.substr(3, 2);
    let str3 = val.substr(5);

    var final = `${str1} - ${str2} - ${str3}`;
    setCredit(val);
  };

  const handleChangeMobile = (e) => {
    const val = e.target.value;
    setMobile(val);
  };
  // submit method
  // const submit = () => {
  //   dispatch({ type: "add", payload: task, reducerType: "list1" });
  //   setTask("");
  // };
  // const keyPress = (event) => {
  //   if (event.keyCode === 13) {
  //     dispatch(addTask(task));
  //     setTask("");
  //   }
  // };
  const onkeyup = (event) => {
    console.log(event.target.value);
    console.log(event.target.selectionStart);
    var inputValue = event.target.value;
    var caretPosition = event.target.selectionStart;
    var sanitizedValue = inputValue.replace(/[^A-Za-z0-9]/gi, "");
    var parts = [];
    for (var i = 0, len = sanitizedValue.length; i < len; i += 3) {
      parts.push(sanitizedValue.substring(i, i + 3));
    }
    // for (var i = caretPosition - 1; i >= 0; i--) {
    //   var c = inputValue[i];
    //   if (c < "0" || c > "9") {
    //     caretPosition--;
    //   }
    // }
    // caretPosition += Math.floor(caretPosition / 3);
    const aa = parts.join("-");
    // this.selectionStart = this.selectionEnd = caretPosition;

    // const val = credit;
    // let str1 = val.substr(0, 3);
    // let str2 = val.substr(3, 2);
    // let str3 = val.substr(5);

    // var final = `${str1} - ${str2} - ${str3}`;
    setCredit(aa);
  };

  const handleHasInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.selectionStart);
    var inputValue = event.target.value;
    var caretPosition = event.target.selectionStart;
    var sanitizedValue = inputValue.replace(/[^0-9]/gi, "");
    var parts = [];
    var finalVal;
    let Pattern = "##";
    if (Pattern.startsWith("##")) {
      let i = 0;
      while (i < sanitizedValue.length) {
        if (i == 3) {
          parts.push(sanitizedValue.substring(i, i + 2));
          i += 2;
          continue;
        }
        if (i == 5) {
          parts.push(sanitizedValue.substring(i, i + 4));
          i += 4;
          continue;
        }
        parts.push(sanitizedValue.substring(i, i + 3));
        i += 3;
      }

      // for (var j = caretPosition - 1; j >= 0; j--) {
      //   var c = inputValue[j];
      //   if (c < "0" || c > "9") {
      //     caretPosition--;
      //   }
      // }
      // caretPosition += Math.floor(caretPosition / 3);
      finalVal = parts.join("-");
      console.log(finalVal);
    } else {
      let i = 0;
      while (i < sanitizedValue.length) {
        if (i == 2) {
          parts.push(sanitizedValue.substring(i, sanitizedValue.length - 1));
          i += sanitizedValue.length - 2;
          continue;
        }

        parts.push(sanitizedValue.substring(i, i + 2));
        i += 2;
      }

      finalVal = parts.join("-");
      console.log(finalVal);
    }
    // this.selectionStart = this.selectionEnd = caretPosition;

    // const val = credit;
    // let str1 = val.substr(0, 3);
    // let str2 = val.substr(3, 2);
    // let str3 = val.substr(5);

    // var final = `${str1} - ${str2} - ${str3}`;
    setMobile(finalVal);
  };

  return (
    <>
      <div className="w-50 m-auto">
        <Form.Label>Input fields with pattern</Form.Label>

        <Form.Control
          type="text"
          placeholder="--- --- ---"
          onKeyUp={onkeyup}
          onChange={handleChangeCredit}
          value={credit}
          maxLength="19"
        />

        <Form.Control
          type="text"
          placeholder="### ## ####"
          onKeyUp={handleHasInput}
          onChange={handleChangeMobile}
          value={mobile}
          maxLength="11"
        />
        {/* <Button className="mt-3" onClick={submit}>
          ADD
        </Button> */}
      </div>
    </>
  );
}

export default CustormForm;
