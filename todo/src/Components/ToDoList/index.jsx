import React, { useState } from "react";
import * as S from "./index.style.js";
import Button from "../Button/index";

export function ToDoList({ name, handleRemove }) {
  return (
    <>
      <S.List> {name} </S.List>
      <Button onClick={handleRemove}> Delete </Button>
    </>
  );
}
