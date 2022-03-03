import React, { useState } from "react";
import Button from "../Button/index.jsx";
import { Inputstyle } from "./index.style.js";
// import Button from "../Button/index.jsx";

export default function Input({ addToList }) {
  // we need to save the text to the state

  const [text, setText] = useState("");

  // I want to capture the input
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  // when user clicks the button, it will add to the list
  function handleClick() {
    addToList(text);
  }

  // when user click "Enter" key, it will add to the list
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <main>
      <Inputstyle
        type="text"
        onChange={(e) => handleChange(e)}
        name="name"
        value={text}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleClick}></Button>
    </main>
  );
}
