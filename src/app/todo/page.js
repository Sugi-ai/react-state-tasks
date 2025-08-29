"use client";

import { useState } from "react";

import { Box, Task } from "@/components";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [filterStatus, setFilterStatus] = useState("All");

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === "All") return true;
    if (filterStatus === "Active") return !todo.isDone;
    return todo.isDone;
  });

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    // setTodos([...todos, { title: inputValue, isDone: false, id: Date.now() }]);
    // setInputValue("");
    if (inputValue !== "") {
      const newTodos = [
        ...todos,
        { title: inputValue, check: false, id: Date.now(), isDone: false },
      ];
      setTodos(newTodos);
      setInputValue("");
    } else {
      alert("Hooson baina yumaa bicheeed Add daraaacheee!");
    }
  };

  const handleFilter = (status) => {
    setFilterStatus(status);
  };

  const deleteComplete = () => {
    const deleteCompleted = todos.filter((todo) => !todo.isDone);
    setTodos(deleteCompleted);
  };

  return (
    <div className=" flex justify-center items-center flex-col pt-15 bg-[#F3F4F6] h-screen">
      <div className="h-fit w-[377px] bg-[#FFFFFF] border-solid hover:border-dotted rounded-md shadow-[0_0_12px_0_#00000029]">
        <div className="flex justify-center mt-6 text-black font-semibold text-[20px]">
          To-Do List
        </div>
        <div className="flex justify-center gap-[6px] mt-4 ">
          <input
            value={inputValue}
            onChange={handleOnchange}
            type="text"
            className="border rounded-[6px] border-black w-[280px] text-[#71717A]"
            placeholder="Add a new task..."
          />

          <Box
            isActive={true}
            onClick={handleOnClick}
            className="border border-[#E4E4E7] text-[#71717A] bg-[#3C82F6]"
            title="Add"
            text="Hello"
          />
        </div>
        <div className="flex  gap-[6px] mt-5  w-[32px] ml-4 text-[12px]">
          <Box
            onClick={() => handleFilter("All")}
            title="All"
            height="32px"
            isActive={filterStatus === "All"}
          />
          <Box
            onClick={() => handleFilter("Active")}
            title="Active"
            height="32px"
            isActive={filterStatus === "Active"}
          />
          <Box
            onClick={() => handleFilter("Completed")}
            title="Completed"
            backgroundColor="#F3F4F6"
            height="32px"
            isActive={filterStatus === "Completed"}
          />
        </div>
        <div className="px-4 ">
          {filteredTodos.map((todo, index) => (
            <Task
              todos={todos}
              key={index}
              taskText={todo.title}
              isDone={todo.isDone}
              id={todo.id}
              setTodos={setTodos}
              index={index}
            ></Task>
          ))}
        </div>

        {todos.length > 0 ? (
          <div className="flex justify-between px-[20px] mt-5">
            <div className="text-[#6B7280]">
              {todos.filter((todo) => todo.isDone).length} of {todos.length}{" "}
              tasks completed
            </div>
            <div className="text-[#EF4444]" onClick={deleteComplete}>
              {" "}
              Clear completed
            </div>
          </div>
        ) : (
          <div className="flex justify-between px-[20px] mt-5">
            <div className="text-[#6B7280]">No tasks yet.Add one above</div>
          </div>
        )}

        <div className="text-[12px] flex justify-center p-1 mt-10">
          <p className="text-gray-400">Powered by</p>
          <a className="text-blue-500">Pinecone academy</a>
        </div>
      </div>
    </div>
  );
}
