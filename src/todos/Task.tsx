import { CircleCheck, Trash2, SquarePen } from "lucide-react";
import { useEffect } from "react";
interface TodosObj {
  id: string;
  content: string;
  checked: boolean;
}

interface TaskProps {
    task: TodosObj[];
  setTask: React.Dispatch<React.SetStateAction<TodosObj[]>>;
  onEdit: (index: number) => void;
}
export const Task = ({ task, setTask, onEdit }: TaskProps) => {
    const handleDeleteElement = (elm:number) => {
        const updatedTasks = task.filter((_, index) => index !== elm);
        setTask(updatedTasks);
  }

  const handleCheckedTask = (id: string) => {
    const updatedTasks = task.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setTask(updatedTasks);
  }
useEffect(()=>{
    localStorage.setItem("reactTodo", JSON.stringify(task));
}, [task])
  

  
  return (
    <ul className="w-full max-w-md">
      {task.map((curr, index) => (
        <li
          key={curr.id}
          className="flex justify-between items-center bg-slate-400 m-2 p-2 rounded-2xl"
        >
          <span className={curr.checked ? "line-through opacity-60" : ""}>
            {index + 1}.{" "}
            {curr.content[0]?.toUpperCase() + curr.content.slice(1)}
          </span>
          <span className="flex items-center gap-3">
            <CircleCheck
              className={`w-6 h-6 mr-1 rounded-full cursor-pointer ${
                curr.checked
                  ? "bg-green-800 text-white"
                  : "bg-green-600 text-amber-50"
              }`}
              onClick={() => handleCheckedTask(curr.id)}
            />
            <SquarePen
              className="w-6 h-6 mr-1 text-amber-50 cursor-pointer"
              onClick={() => onEdit(index)}
            />
            <Trash2
              className="w-6 h-6 mr-1 bg-red-600  rounded-sm  p-1 text-amber-50 cursor-pointer"
              onClick={() => handleDeleteElement(index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
};
