import React from "react";
import { BrowserRouter, Route, Router, Switch, Link } from "react-router-dom";
// components
import TODO from "./components/todo";
import List from "./components/list";
import NewListComponent from "./components/newList";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./App.css";
import CustormForm from "./components/form";
import ContactForm from "./components/contactForm";
import EventBubble from "./components/eventBubbling";

function App() {
  const { list } = useSelector((state) => state.listReducer);
  // console.log(list);
  const newList = useSelector((state) => state.newList);
  // console.log(newList);
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/form" component={CustormForm} />
          <Route path="/todo" component={TODO} />
          <Route path="/contactUs" component={ContactForm} />
        </Switch>
      </BrowserRouter>

      <header className="App-header">
        <p>Todo App With Redux</p>
      </header>
      <Row>
        <Container className="mt-3">
          {/* {lists} */}
          <TODO />
          <List todolist={list} />
          <NewListComponent />

          <EventBubble/>
        </Container>
      </Row>
    </div>
  );
}

export default App;
