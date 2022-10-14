import React from "react";
import AppHeader from "../AppHeader";
import Status from "../Status";

export const HomePage = () => {
  const statusOfTask = ['To Do', 'In Progress', 'In Review', 'Done'];
  return (
    <div>
      <AppHeader />
      <div className="container-flexbox m-1">
        {
          statusOfTask.map((status) => (
            <Status key={status} status={status} />
          ))
        }
      </div>
    </div>
  );
}
