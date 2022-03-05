import React from "react";
import * as S from "./index.style.js";
import Button from "../Button/index";

export function ToDoList({ name, handleRemove, toggleCompleted, isCompleted }) {
  return (
    <>
      <S.List style={{ textDecoration: isCompleted ? "line-through" : "" }}>
        {name}
        <Button onClick={toggleCompleted}>Completed</Button>
        <Button onClick={handleRemove}> Delete </Button>
      </S.List>
    </>
  );
}
