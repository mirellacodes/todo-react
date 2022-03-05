import React, { useState } from "react";
import Button from "../Button";
import Input from "../Input";
// import Button from "../Button";
import { ToDo } from "../ToDo";

function App() {
  const [list, setList] = useState([]);

  // create a list
  function addToList(newItem) {
    setList([...list, { name: newItem, isCompleted: false }]);
  }

  // delete/reset the entire list
  function clearList() {
    setList([]);
  }

  // delete each
  function handleRemove(index) {
    const remove = [...list.slice(0, index), ...list.slice(index + 1)];
    setList(remove);
    console.log("hello");
  }

  // toggle completed...
  function toggleCompleted(index) {
    // get all the list, change the "isCompleted" from true to false
    const newList = [...list];
    newList[index].isCompleted = true;
    setList(newList);
    console.log("it is working");
  }

  return (
    <main>
      <h1>To Do List </h1>
      <Input addToList={addToList} />
      <ToDo
        list={list}
        handleRemove={handleRemove}
        toggleCompleted={toggleCompleted}
      ></ToDo>
      <Button onClick={clearList}> Reset</Button>
    </main>
  );
}

export default App;
