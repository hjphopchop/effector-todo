import { createEvent, createStore } from "effector";
import connectLocalStorage from "effector-localstorage";

export const updateTodo = (todos, id, message) =>
  todos.map((todo) => ({
    ...todo,
    message: todo.id === id ? message : todo.message,
  }));

export const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id);
export const addTodoToList = (todos, message) => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    message,
  },
];

export const setNewTodo = createEvent();
export const addTodo = createEvent();
export const update = createEvent();
export const filter = createEvent();
export const remove = createEvent();

const todosLocalStorage = connectLocalStorage("todos");
export const $todos = createStore(
  todosLocalStorage.init({
    todos: [],
    newTodo: "",
  })
)
  .on(setNewTodo, (state, newTodo) => ({
    ...state,
    newTodo,
  }))
  .on(addTodo, (state) => ({
    ...state,
    newTodo: "",
    todos: addTodoToList(state.todos, state.newTodo),
  }))
  .on(update, (state, { id, text }) => ({
    ...state,
    newTodo: "",
    todos: updateTodo(state.todos, id, text),
  }))

  .on(remove, (state, id) => ({
    ...state,
    newTodo: "",
    todos: removeTodo(state.todos, id),
  }));

  $todos.watch(todosLocalStorage)