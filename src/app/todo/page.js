"use client";

import { useState } from "react";

import { Box, Task } from "@/components";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [filterStatus, setFilterStatus] = useState("all");

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    setTodos([...todos, { title: inputValue, isDone: false }]);
    setInputValue("");
  };
  // const data = [
  //   {
  //     dataName: "Create PR 2",
  //     isCompleted: true,
  //   },
  //   {
  //     dataName: "Create PR ",
  //     isCompleted: false,
  //   },
  // ];

  return (
    <div className=" flex justify-center items-center flex-col pt-15 bg-white h-screen">
      <div className="h-fit w-[377px] bg-white border-3 border-indigo-500">
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
            onClick={handleOnClick}
            className="border border-[#E4E4E7] text-[#71717A] bg-[#3C82F6]"
            title="Add"
            backgroundColor="#3C82F6"
            text="Hello"
          />
        </div>
        <div className="flex  gap-[6px] mt-5  w-[32px] ml-4 text-[12px]">
          <Box
            title="All"
            backgroundColor="#3C82F6"
            text="white"
            height="32px"
          />
          <Box
            title="Active"
            backgroundColor="#F3F4F6"
            height="32px"
            color="black"
          />
          <Box
            title="Completed"
            backgroundColor="#F3F4F6"
            height="32px"
            color="black"
          />
        </div>
        <div className="px-4 ">
          {todos.map((todo, index) => (
            <Task
              key={index}
              taskText={todo.title}
              isDone={todo.isDone}
              setTodos={setTodos}
              index={index}
            ></Task>
          ))}
        </div>

        {todos.length > 0 ? (
          <div className="flex justify-between px-[20px] mt-5">
            <div className="text-[#6B7280]">1 of 2 tasks completed</div>
            <div className="text-[#EF4444]">Clear completed</div>
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

// export const Task = (props) => {
//   return (
//     <div className="w-[345px] h-[62px] flex items-center my-5 px-4 gap-2.5 bg-gray-100">
//       <input defaultChecked={props.isCompleted} type="checkbox"></input>
//       <div className="text-black">{props.taskText}</div>

//       {props.isCompleted && (
//         <button className="p-3 bg-red-50 text-red-500 rounded-xl  ">
//           Delete
//         </button>
//       )}
//     </div>
//   );
// };
