import React, { useEffect, useState } from "react";
import { AppTitle, createTicketLabel, newTask, statusOfTask } from "../constants";
import Button from 'react-bootstrap/Button';
import { TicketType } from "../Status/types";
import { ModalComponent } from "../components/Modal";
import { useForm } from 'react-hook-form';

const tickets: TicketType[] = [];

interface AppHeaderProps {
    getTicketDetails: (ticket: TicketType[]) => void;
}

export function AppHeader({ getTicketDetails }: AppHeaderProps) {
    const { register, handleSubmit, formState, formState: { errors }, reset } = useForm<TicketType>();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        handleClose();
        tickets.push({ ...data });
        getTicketDetails(tickets);
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                taskName: "",
                taskDesc: "",
                taskStatus: ""
            })
        }
    });

    return (
        <div className="d-flex justify-content-between align-items-center m-3">
            <h1>{AppTitle}</h1>
            <Button variant="outline-primary" onClick={handleShow}>{createTicketLabel}</Button>
            {
                show && (<ModalComponent title={newTask} handleClose={handleClose} handleSave={handleSubmit(onSubmit)}>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="d-flex mb-3">
                            <div className="w-50">Enter Task Name
                                <span className="red-text">*</span>
                            </div>
                            <div className="w-50">
                                <input type="text" className="form-control" {...register("taskName", { required: { value: true, message: "Name cannot be empty." } })} />
                                {
                                    errors.taskName && <DisplayErrorMessage message={errors.taskName.message} />
                                }
                            </div>
                        </label>
                        <label className="d-flex mb-3">
                            <div className="w-50">Enter Task Description
                                <span className="red-text">*</span>
                            </div>
                            <div className="w-50">
                                <textarea className="form-control" {...register("taskDesc", { required: { value: true, message: "Description cannot be empty." } })} />
                                {
                                    errors.taskDesc && <DisplayErrorMessage message={errors.taskDesc.message} />
                                }
                            </div>
                        </label>
                        <label className="d-flex mb-3">
                            <div className="w-50">Enter Task Status
                                <span className="red-text">*</span>
                            </div>
                            <div className="w-50">
                                <select className="form-control" {...register("taskStatus", { required: { value: true, message: "Select the status of task." } })}>
                                    <option value="">Select</option>
                                    {
                                        statusOfTask.map((status) => (
                                            <option key={status} value={status}>{status}</option>
                                        ))
                                    }
                                </select>
                                {
                                    errors.taskStatus && <DisplayErrorMessage message={errors.taskStatus.message} />
                                }
                            </div>
                        </label>
                    </form>
                </ModalComponent>)
            }
        </div>
    );
}

interface DisplayErrorMessageProps {
    message: string | undefined;
}

function DisplayErrorMessage({ message }: DisplayErrorMessageProps) {
    return(
        <span className="red-text">{message}</span>
    );
}