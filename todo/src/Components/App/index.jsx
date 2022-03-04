import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
// import Button from "../Button";
import { ToDo } from "../ToDo";

function App() {
  const [list, setList] = useState([]);

  // create a list
  function addToList(newItem) {
    setList([...list, { name: newItem }]);
  }

  // delete/reset the entire list
  function clearList() {
    setList([]);
  }

  return (
    <main>
      <h1>To Do List </h1>
      <Input addToList={addToList} />
      <ToDo list={list}></ToDo>
      <Button onClick={clearList}> Reset</Button>
    </main>
  );
}

export default App;
