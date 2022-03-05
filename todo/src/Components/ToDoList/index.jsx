import React from "react";
import * as S from "./index.style.js";
import Button from "../Button/index";

export function ToDoList({ name, handleRemove, toggleCompleted, completed }) {
  return (
    <>
      <S.List>
        {name}
        <Button
          style={
            completed ? { textDecoration: `line-through`, String: `hello` } : {}
          }
          onClick={toggleCompleted}
        >
          Completed
        </Button>
        <Button onClick={handleRemove}> Delete </Button>
      </S.List>
    </>
  );
}
