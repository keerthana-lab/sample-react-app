import React, { createContext, useReducer } from "react";
import { AppHeader } from "../AppHeader";
import { defaultValue, statusOfTask } from "../constants";
import Status from "../Status";
import { TicketType } from "../constants/types";

type contextProviderType = {
  ticketDetails: TicketType[];
  handleDelete?: (taskId: number) => void;
}

const contextDefaultValues: contextProviderType = {
  ticketDetails: [defaultValue]
}

export const TaskContext = createContext<contextProviderType>(contextDefaultValues);

export function HomePage() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD": return state ? [...state, action.payload] : [{...action.payload}];
      case "DELETE": return state.filter((ticket) => ticket.taskId !== action.payload);
      default: return;
    }
  }
  const [state, dispatch] = useReducer(reducer, undefined);

  const handleDelete = (taskId: number) => {
    dispatch({ type: "DELETE", payload: taskId })
  }

  const updateState = (ticketDetails: TicketType) => {
    dispatch({ type: "ADD", payload: ticketDetails })
  }

  return (
    <TaskContext.Provider value={{ ticketDetails: state, handleDelete }}>
      <AppHeader getTicketDetails={(tickets) => updateState(tickets)} />
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
