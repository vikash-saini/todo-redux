import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import { Formik } from "formik";
import axios from "axios";

const contactvalidater = (value) => {
  let errors = {};
  if (!value.email) {
    errors.email = "email is required";
  }

  if (!value.firstName) {
    errors.firstName = "firstName is required";
  }

  return errors;
};

const ContactForm = () => {
  const [todo, setTodo] = React.useState();
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        if (res?.data.length > 0) {
          setTodo(res.data);
        }
      })
      .catch();

    // when component isunmount
    return () => {
      console.log("component will unmount");
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: contactvalidater,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setUsers((prevState) => [...prevState, values]);
    },
  });
  console.log("users",users);
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            isInvalid={formik.errors.firstName}
          />
          {formik.errors.email && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            isInvalid={formik.errors.email}
          />
          {formik.errors.email && (
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>

      <p>Todo List from API</p>
      {/* <ul>
        {todo && todo.map((row,index)=>{
         
          return(
            <li key={index}>{row.title}</li>
          )
        })}
      </ul> */}
      <p>List of Users</p>
      <ul>
        {users &&
          users.map((row, index) => {
            return <li key={index}>{row.firstName}</li>;
          })}
      </ul>
    </Container>
  );
};

export default ContactForm;
