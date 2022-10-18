import React, { createContext, useState } from "react";
import AppHeader from "../AppHeader";
import { defaultValue, statusOfTask } from "../constants";
import Status from "../Status";

export const TaskContext = createContext([defaultValue])

export const HomePage = () => {
  const [ticketDetails, setTicketDetails] = useState([defaultValue]);
  
  return (
    <TaskContext.Provider value={ticketDetails}>
      <AppHeader getTicketDetails={(tickets) => setTicketDetails([...tickets])} />
      <div className="container-flexbox m-1">
        {
           statusOfTask.map((status) => (
            <Status key={status} status={status} />
          ))
        }
      </div>
    </TaskContext.Provider>
  );
}
