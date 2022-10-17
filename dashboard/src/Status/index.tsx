import React, { useContext } from "react";
import { TaskContext } from "../HomePage";
import Ticket from "./ticket";
import Title from "./title";

interface StatusProps {
    status: string;
}

function Status({ status }: StatusProps) {
    const inputs = useContext(TaskContext);

    return (
        <div className="grey-bg rounded status-card p-2">
            <Title name={status} />
            {
                inputs.taskName && inputs.taskDesc && inputs.taskStatus === status ?
                    <Ticket ticket={inputs} /> : null
            }
        </div>
    );
}

export default Status;