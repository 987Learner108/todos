interface Task {
    setTask: React.Dispatch<React.SetStateAction<string[]>>
}

export const ClearAll = ({ setTask }: Task) => {
    const handleClearAll = () => {
        //event.preventDefault();
        setTask([]);
    }
    return (
      <button
        className="bg-red-600 mt-5 p-2 rounded-2xl text-amber-50  transition-transform duration-300 hover:bg-red-800 active:scale-95"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    );
}