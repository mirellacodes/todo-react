import React from "react";
import * as S from "./index.style.js";

export default function Button({ onClick }) {
  return <S.ButtonStyle onClick={onClick}> Add </S.ButtonStyle>;
}
