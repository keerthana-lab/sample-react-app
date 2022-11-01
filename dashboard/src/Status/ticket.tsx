import { useContext, useState } from "react";
import { TicketType } from "../constants/types";
import { deleteButton } from "../constants";
import { TaskContext } from "../HomePage";
import { ModalComponent } from "../components/Modal";

interface TicketProps {
    ticket: TicketType;
}

function Ticket({ ticket }: TicketProps) {
    const { handleDelete } = useContext(TaskContext);
    const [show, setShow] = useState(false);

    const onDeleteTask = () => {
        handleDelete && handleDelete(ticket.taskId);
    }

    return (
        <>
        <div className="light-blue-bg border border-secondary rounded p-2 mb-3">
            <div className="d-flex mb-2">
                <strong className="dark-grey-text w-25">Task #</strong>
                {ticket.taskId}
            </div>
            <div className="d-flex mb-2">
                <strong className="dark-grey-text w-25">Name:</strong>
                {ticket.taskName}
            </div>
            <div className="d-flex mb-2">
                <strong className="dark-grey-text w-25">Description:</strong>
                {ticket.taskDesc}
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-outline-dark" onClick={() => setShow(true)}>{deleteButton}</button>
            </div>
        </div>
        {
            show && (
                <ModalComponent handleClose={() => setShow(false)} handleSave={onDeleteTask} buttonText={deleteButton}>
                    <div>Are You Sure to delete the Task ?</div>
                </ModalComponent>
            )
        }
        </>
    );
}

export default Ticket;