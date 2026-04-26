import { useState } from "react";
import { Task } from "./Task";
import { ClearAll } from "./ClearAll";
import { TodoForm } from "./TodoForm";
import { DateTime } from "./DateTime";

interface TodosObj{
  id: string;
  content: string;
  checked: boolean;
}
const todokey = "reactTodo"
const localStore = () => {
    const rawTodos = localStorage.getItem(todokey); 
    if (!rawTodos || rawTodos === "undefined") {
      return [];
    }
    return JSON.parse(rawTodos)
  }

export const Todo = () => {
  const [inputValue, setInputValue] = useState<TodosObj>({
    id: "",
    content: "",
    checked: false
  });
  const [task, setTask] = useState<TodosObj[]>(localStore);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEditTask = (index: number) => {
    setInputValue(task[index]);
    setEditIndex(index);
  }

  return (
    <section className="h-screen  flex flex-col items-center bg-cyan-200 p-5 overflow-hidden">
      <header className="mb-5">
        <h1>Todo List</h1>
        <DateTime />
      </header>
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        task={task}
        setTask={setTask}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <Task task={task} setTask={setTask} onEdit={handleEditTask} />
      <ClearAll setTask={setTask} />
    </section>
  );
};
