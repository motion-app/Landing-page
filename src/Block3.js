import React from "react";
import './Block3.css'

export default function Block3() {
  return (
    <>
      <h2 className="block-3-h2">Amazing things happen when teams work together.</h2>
      <div className="container">
        <div className="blocks">
          <h2>Project management</h2>
          <p>Add new project and tasks in Kanban board</p>
        </div>
        <div className="blocks">
          <h2>Chat</h2>
          <p>communicate in real time and share documents</p>
        </div>
        <div className="blocks">
          <h2>Track productivity</h2>
          <p>Build in dashboard to see team productivity and analytics</p>
        </div>
      </div>

    </>
  );
}
