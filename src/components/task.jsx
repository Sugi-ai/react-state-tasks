export const Task = ({ setTodos, index, isDone, taskText, todos, id }) => {
  const handleOnChange = (event, id) => {
    setTodos((prev) =>
      prev.map((el, i) => {
        if (el.id === id) {
          el.isDone = event.target.checked;
        }
        return el;
      })
    );
  };

  const deleteOnChange = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };
  return (
    <div className="w-[345px] h-[62px] flex items-center my-5 px-4 gap-2.5 bg-gray-100 justify-between">
      <div className="flex gap-2.5 w-[245px]">
        <input
          onChange={(event) => handleOnChange(event, id)}
          checked={isDone}
          type="checkbox"
        ></input>

        {isDone ? (
          <div className="text-black line-through w-full overflow-hidden wrap-break-word">
            {taskText}
          </div>
        ) : (
          <div className="text-black w-full overflow-hidden wrap-break-word">
            {taskText}
          </div>
        )}
      </div>

      <div>
        {isDone && (
          <button
            onClick={() => deleteOnChange(id)}
            className="p-3 bg-red-50 text-red-500 rounded-xl"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
