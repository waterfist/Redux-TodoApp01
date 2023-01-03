import React from "react";
import Header from "../redux/cpmponents/Header";
import Input from "../redux/cpmponents/Input";
import TodoList from "../redux/cpmponents/TodoList";
import Footer from "../redux/cpmponents/Footer";

function Main() {
  return (
    <>
      <Header />
      <Input />
      <TodoList />
      <TodoList />
      <Footer />
    </>
  );
}

export default Main;
