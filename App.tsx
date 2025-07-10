import React, { type FC, type PropsWithChildren } from "react";
import "./App.css";
import Card from "./components/Card";
import NewsSideBar from "./components/main/NewsSideBar";

const App = () => {
  return (
    <>
      <NewsSideBar />
      <Navigation />
      <SearchBar />
      <ContentBar />
    </>
  );
};

export default App;