import React from "react";
import Avatar from "./avatar";

function App() {
  return (
    <div className="container">
      <h1>Avatar Component</h1>

      <div className="avatar-list">
        <Avatar image="https://i.pravatar.cc/150?img=12" name="Rahul" />
        <Avatar image="https://i.pravatar.cc/150?img=47" name="Priya" />
        <Avatar image="https://i.pravatar.cc/150?img=33" name="Arjun" />
      </div>
    </div>
  );
}

export default App;