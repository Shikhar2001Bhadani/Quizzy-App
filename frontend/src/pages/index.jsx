import React from "react";
import { Link } from "react-router-dom";
import { homePageButtons } from "./utils";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full min-h-screen">
      <h1 className="font-bold text-3xl text-center">Welcome to Quizzy!</h1>

      <div className="grid grid-cols-2 w-full lg:w-2/5 gap-4 mt-4 px-4">
        {homePageButtons.map((button) => (
          <Link to={button.to} key={button.label}>
            <div className="flex min-h-50 justify-center items-center bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-md transition-all">
              <p className="text-center text-lg font-bold">{button.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
