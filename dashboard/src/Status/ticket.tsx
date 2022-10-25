import React from "react";
import { TicketType } from "./types";
import { editButton } from "../constants";

interface TicketProps {
    ticket: TicketType;
}

function Ticket({ ticket }: TicketProps) {
    return (
        <div className="light-blue-bg border border-secondary rounded p-2 mb-3">
            <div className="d-flex mb-2">
                <strong className="dark-grey-text w-25">Name:</strong>
                {ticket.taskName}
            </div>
            <div className="d-flex mb-2">
                <strong className="dark-grey-text w-25">Description:</strong>
                {ticket.taskDesc}
            </div>
            <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-outline-dark">{editButton}</button>
            </div>
        </div>
    );
}

export default Ticket;