import { create } from "zustand";

export const todo = create((set) => ({
  todoList: [
    {
      id: 1,
      name: "Name1",
      vote: 0,
    },
    {
      id: 2,
      name: "Name2",
      vote: 0,
    },
    {
      id: 3,
      name: "Name3",
      vote: 0,
    },
  ],
  setTodoList: (newTodoList) => set({ todoList: newTodoList }),
}));
