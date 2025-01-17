import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todo } from "./store/todoStore";

interface IProps {}

const Details: FC<IProps> = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { todoList } = todo();
  return (
    <>
      <div>Details</div>
      <p>id: {id} </p>
      <p>name : {todoList[id - 1].name}</p>
      <p>vote : {todoList[id - 1].vote}</p>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default Details;
