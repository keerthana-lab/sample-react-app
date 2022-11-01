import { useContext } from "react";
import { TaskContext } from "../HomePage";
import Ticket from "./ticket";
import Title from "./title";

interface StatusProps {
    status: string;
}

function Status({ status }: StatusProps) {
    const { ticketDetails } = useContext(TaskContext);
    return (
        <div className="grey-bg rounded status-card p-2">
            <Title name={status} />
            {
                 ticketDetails?.map((t) => (
                    t.taskStatus === status &&
                    <Ticket ticket={t} key={t.taskId} /> 
                ))
            }
        </div>
    );
}

export default Status;