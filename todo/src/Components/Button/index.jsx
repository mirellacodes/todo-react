import React from "react";
import * as S from "./index.style.js";

export default function Button({ onClick, children }) {
  return <S.ButtonStyle onClick={onClick}> {children} </S.ButtonStyle>;
}
