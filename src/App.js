import React from "react";
import TodoList from "./components/TodoList";
function App() {
  return (
    <div
      style={{
        backgroundColor: "#EFC3E6",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TodoList/>
    </div>
  );
}

export default App;
