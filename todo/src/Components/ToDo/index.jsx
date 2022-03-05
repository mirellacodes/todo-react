import React from "react";
import { ToDoList } from "../ToDoList";

export function ToDo({ list, handleRemove, toggleCompleted }) {
  return (
    // iterate each list by using map function, so that everytime it maps, it will create a new li
    <ul>
      {list?.map((item, index) => (
        <ToDoList
          name={item.name}
          key={index}
          handleRemove={() => handleRemove(index)}
          isCompleted={item.isCompleted}
          toggleCompleted={() => toggleCompleted(index)}
        />
      ))}
    </ul>
  );
}
