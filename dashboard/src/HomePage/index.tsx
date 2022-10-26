import React, { createContext, useReducer } from "react";
import { AppHeader } from "../AppHeader";
import { defaultValue, statusOfTask } from "../constants";
import Status from "../Status";
import { TicketType } from "../Status/types";

type contextProviderType = {
  ticketDetails: TicketType[];
  handleDelete?: (taskName: string) => void;
}

const contextDefaultValues: contextProviderType = {
  ticketDetails: [defaultValue]
}

export const TaskContext = createContext<contextProviderType>(contextDefaultValues);

export function HomePage() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD": return state ? [...state, action.payload] : [{...action.payload}];
      case "DELETE": return state.filter((ticket) => ticket.taskName !== action.payload);
      default: return;
    }
  }
  const [state, dispatch] = useReducer(reducer, undefined);

  const handleDelete = (taskName) => {
    dispatch({ type: "DELETE", payload: taskName })
  }

  const updateState = (ticketDetails) => {
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
