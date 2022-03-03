import React from "react";
import * as S from "./index.style.js";

export function ToDoList({ name }) {
  return <S.List> {name} </S.List>;
}
