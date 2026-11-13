"use client";

import { Plus, Trash } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-slate-200 text-slate-600 h-screen">
      <div className="bg-white w-250 mx-auto mt-20 rounded-lg p-8">
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
          <div className="w-full  flex items-center gap-5 justify-between ">
            <input
              type="text"
              className="border border-slate-300 w-3/4 h-10 rounded-md p-2 text-black outline-none focus:border-blue-500 focus:shadow-sm transition-colors duration-300"
            />
            <button className="flex items-center gap-2 bg-blue-600 text-white w-fit h-8 rounded-md p-2 cursor-pointer hover:bg-blue-700 transition-colors duration-300 text-sm">
              <Plus size={18} />
              <span>Add Task</span>
            </button>
          </div>
        </div>

        <hr className="mb-10 border-slate-300" />
        {/* added area */}
        <div>
          <div className=" flex items-center justify-between h-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-slate-300 rounded-full cursor-pointer"></div>
              <p>Learn React useState</p>
            </div>
            <button>
              <Trash
                size={17}
                className="cursor-pointer hover:text-red-600 transition-colors duration-300"
              />
            </button>
          </div>
          <div className=" flex items-center justify-between h-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-slate-300 rounded-full cursor-pointer"></div>
              <p>Practice event handling</p>
            </div>
            <button>
              <Trash
                size={17}
                className="cursor-pointer hover:text-red-600 transition-colors duration-300"
              />
            </button>
          </div>
          <div className=" flex items-center justify-between h-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-slate-300 rounded-full cursor-pointer"></div>
              <p>Understand useEffect</p>
            </div>
            <button>
              <Trash
                size={17}
                className="cursor-pointer hover:text-red-600 transition-colors duration-300"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
