import React from "react";
import { TicketType } from "./types";

interface TicketProps {
    ticket: TicketType;
}

function Ticket({ ticket }: TicketProps) {
    return (
        <div className="light-blue-bg border border-secondary rounded p-2">
            <div>
                <div className="d-flex">
                    <strong className="dark-grey-text w-25">Name:</strong>
                    {ticket.taskName}
                </div>
                <div className="d-flex">
                    <strong className="dark-grey-text w-25">Description:</strong>
                    {ticket.taskDesc}
                </div>
            </div>
        </div>
    );
}

export default Ticket;