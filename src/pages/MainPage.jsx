import React from "react";
import CreateTodo from "../components/CreateTodo";
import List from "../components/List";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto  py-6">
        <CreateTodo />
        <List />
      </div>
    </div>
  );
};

export default MainPage;
