import React from "react";
import AppHeader from "../AppHeader";
import { statusOfTask } from "../constants";
import Status from "../Status";

export const HomePage = () => {
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
