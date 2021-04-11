import logo from "./logo.svg";
import "./App.css";
// components
import TODO from "./components/todo";
import List from "./components/list";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function App() {
  const { list } = useSelector((state) => state.lists);
  console.log(list);
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo App With Redux</p>
      </header>
      <Row>
        <Container className="mt-3">
          {/* {lists} */}
          <TODO />
          <List todolist={list}/>
        </Container>
      </Row>
    </div>
  );
}

export default App;
