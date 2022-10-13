import React from "react";
import AppHeader from "../AppHeader";
import Status from "../Status";
import "../App.css"

export const HomePage = () => {
  const statusOfTask = ['To Do', 'In Progress', 'In Review', 'Done'];
  return (
      <div>
          <AppHeader />
          <div className="container-fluid">
            <div className="row">
            {
              statusOfTask.map((status) => (
                <Status key={status} status={status} />
              ))
            }
            </div>
          </div>
      </div>
  );
}
