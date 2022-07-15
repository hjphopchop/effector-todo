import { useStore } from "effector-react";
import React from "react";
import { $todos, addTodo, setNewTodo } from "../features/model";

const CreateTodo = () => {
  const store = useStore($todos);
  return (
    <>
      <input
        type="text"
        value={store.newTodo}
        onChange={(event) => setNewTodo(event.currentTarget.value)}
        className="border-2 border-gray-200"
      />
      <input
        className="mx-5"
        type="submit"
        onClick={() => addTodo()}
        value="добавить задачу"
      />
    </>
  );
};

export default CreateTodo;
