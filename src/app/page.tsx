"use client";

import { Plus, Trash } from "lucide-react";
import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");

  function addTaskHandler() {
    if (taskInput.trim() === "") {
      return alert("Please write some thing");
    }
    const newTask: Task = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    setTaskInput("");
  }

  function deleteTaskHandler(id: number) {
    alert("button clicked");
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  return (
    <div className="bg-slate-200 text-slate-600 h-screen p-4">
      <div className="bg-white md:w-250 mx-auto mt-20 rounded-lg p-8">
        {/* top */}
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex items-center justify-between">
            <h1 className="text-xl uppercase font-bold text-blue-800">
              My Tasks
            </h1>
            <div className="flex items-center gap-2 text-blue-500 bg-blue-400/20 w-fit h-6 p-3  text-sm rounded-full">
              <span>0</span>
              <span>completed</span>
            </div>
          </div>
          <div className="w-full  flex flex-col md:flex-row items-center gap-5 justify-between ">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Add a new task..."
              className="border border-slate-300 w-full md:w-3/4 h-10 rounded-md p-2 text-black outline-none focus:border-blue-500 focus:shadow-sm transition-colors duration-300"
            />
            <button
              className="flex items-center gap-2 bg-blue-600 text-white w-fit h-8 rounded-md p-2 cursor-pointer hover:bg-blue-700 transition-colors duration-300 text-sm"
              onClick={addTaskHandler}
            >
              <Plus size={18} />
              <span>Add Task</span>
            </button>
          </div>
        </div>

        <hr className="mb-10 border-slate-300" />

        {/* added task area */}

        {tasks.map((task) => (
          <div
            className=" flex items-center justify-between h-10"
            key={task.id}
          >
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-slate-300 rounded-full cursor-pointer"></div>
              <p>{task.title}</p>
            </div>
            <button onClick={() => deleteTaskHandler(task.id)}>
              <Trash
                size={17}
                className="cursor-pointer hover:text-red-600 transition-colors duration-300"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
