import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { todo } from "./store/todoStore";

function App() {
  const navigate = useNavigate();
  const { todoList, setTodoList } = todo();
  // const [todoList, settodoList] = useState([
  //   {
  //     id: 1,
  //     name: "Name1",
  //     counter: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "Name2",
  //     counter: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "Name3",
  //     counter: 0,
  //   },
  // ]);
  return (
    <>
      <div>home</div>
      {todoList.map((todo, idx) => {
        return (
          <div key={`div0${idx}`}>
            <div
              key={`div1${idx}`}
              style={{ border: "1px solid black", padding: "4px" }}
            >
              <span
                key={`span1${idx}`}
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                {todo.name}
              </span>
              <span
                key={`span2${idx}`}
                style={{ marginRight: "10px", marginLeft: "10px" }}
              >
                Votes
              </span>
              <button
                key={`button1${idx}`}
                onClick={() => {
                  const newTodoList = [...todoList];
                  newTodoList[idx].vote = newTodoList[idx].vote + 1;
                  setTodoList(newTodoList);
                }}
              >
                +
              </button>
              <span key={`span3${idx}`}>{todo.vote}</span>
              <button
                key={`button2${idx}`}
                onClick={() => {
                  const newTodoList = [...todoList];
                  newTodoList[idx].vote = newTodoList[idx].vote - 1;
                  setTodoList(newTodoList);
                }}
              >
                -
              </button>
              <button
                key={`button3${idx}`}
                style={{ marginLeft: "10px" }}
                onClick={() => navigate(`/detail/${todo.id}`)}
              >
                detail
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
