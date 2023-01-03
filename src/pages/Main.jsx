import React from "react";
import Header from "../redux/components/Header";
import Input from "../redux/components/Input";
import TodoList from "../redux/components/TodoList";
import Footer from "../redux/components/Footer";

function Main() {
  return (
    <>
      <Header />
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
      <Footer />
    </>
  );
}

export default Main;
