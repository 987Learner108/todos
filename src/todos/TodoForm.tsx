interface TodosObj {
  id: string;
  content: string;
  checked: boolean;
}

interface inputProps{
    inputValue: TodosObj;
    task: TodosObj[];
    editIndex: number | null;
    setInputValue: React.Dispatch<React.SetStateAction<TodosObj>>;
    setTask: React.Dispatch<React.SetStateAction<TodosObj[]>>;
    setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const TodoForm = ({inputValue,task, editIndex, setTask, setInputValue, setEditIndex}:inputProps) => {

    const handleInputValue = (value: string) => {
      setInputValue({id:value, content: value, checked:false});
    };
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const trimmedValue = inputValue.content.trim();

      if (!trimmedValue) return;

      if (editIndex !== null) {
        const updatedTasks = task.map((item, index) =>
            index === editIndex ? { ...item, content:trimmedValue } : item,
        );

        setTask(updatedTasks);
        setEditIndex(null);
      } else {
          const alreadyExists = task.some((item) => item.content === trimmedValue)
        if (alreadyExists) {
          alert("already have the task");
          return;
        }
          setTask((prev) => [{
              id: Date.now().toString(),
              content: trimmedValue,
              checked: false,
          }, ...prev
          ]);
      }
        setInputValue({
            id: "",
            content: "",
            checked: false,
      });
    };
    return (
      <section className="flex flex-row">
        <form onSubmit={handleFormSubmit}>
          <div className="inline-block bg-white rounded-l-3xl p-1 pl-5">
            <input
              className="outline-none"
              type="text"
              value={inputValue.content}
              onChange={(event) => handleInputValue(event.target.value)}
              autoComplete="off"
              maxLength={50}
            />
          </div>
          <div className="inline-block bg-amber-400 py-1 px-3 rounded-r-3xl transition-transform duration-150 origin-left hover:bg-amber-800 active:scale-95">
            <button type="submit">
              {editIndex !== null ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </section>
    );
}