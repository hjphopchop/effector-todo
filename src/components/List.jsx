import React from "react";
import { useStore } from "effector-react";

import Card from "./Card";
import { $todos } from "../features/model";

const List = () => {
  const store = useStore($todos);
  return (
    <>
      {store.todos.map((todo) => (
        <Card key={todo.id} value={todo.message} id={todo.id} />
      ))}
    </>
  );
};

export default List;
