import React, { useState } from "react";

import Input from "../Input";
import Button from "../Button";
import { ToDo } from "../ToDo";

function App() {
  const [list, setList] = useState([]);

  // create a list
  function addToList(newItem) {
    setList([...list, { name: newItem }]);
  }

  function handleButton(e) {
    e.preventDefault();
    addToList(list);
  }

  return (
    <main>
      <h1>To Do List </h1>
      <Input addToList={addToList} />
      {/* <Button onClick={handleButton}></Button> */}
      <ToDo list={list}></ToDo>
    </main>
  );
}

export default App;
