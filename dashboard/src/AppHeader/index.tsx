import React, { useRef, useState } from "react";
import { AppTitle, closeButton, createTicketLabel, defaultValue, newTask, saveButton, statusOfTask } from "../constants";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TicketType } from "../Status/types";


const tickets: TicketType[] = [];

interface AppHeaderProps {
    getTicketDetails: (ticket: TicketType[]) => void;
}

function AppHeader({ getTicketDetails }: AppHeaderProps) {
    const [show, setShow] = useState(false);
    const [formInputs, setFormInputs] = useState(defaultValue);
    const [showError, setShowError] = useState({
        taskName: false,
        taskDesc: false
    });
    const nameInput = useRef<HTMLInputElement>(null);
    const descInput = useRef<HTMLTextAreaElement>(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs(prevState => ({ ...prevState, [name]: value }));
        setShowError(prevState => ({ ...prevState, [name]: false }));
    }

    const displayError = () => {
        if (!formInputs.taskName && !formInputs.taskDesc) {
            setShowError({ "taskName": true, "taskDesc": true });
            nameInput.current?.focus();
        } else if (!formInputs.taskDesc) {
            setShowError(prevState => ({ ...prevState, "taskDesc": true }));
            descInput.current?.focus();
        } else {
            setShowError(prevState => ({ ...prevState, "taskName": true }));
            nameInput.current?.focus();
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formInputs.taskName && formInputs.taskDesc) {
            setShow(false);
            tickets.push({ ...formInputs });
            getTicketDetails(tickets);
            setFormInputs(defaultValue);
        } else {
            displayError();
        }
    }
    return (
        <div className="d-flex justify-content-between align-items-center m-3">
            <h1>{AppTitle}</h1>
            <Button variant="outline-primary" onClick={handleShow}>{createTicketLabel}</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{newTask}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <label className="d-flex mb-3">
                            <div className="w-50">Enter Task Name
                                <span className="red-text">*</span>
                            </div>
                            <div className="w-50">
                                <input type="text" className="form-control" name="taskName" value={formInputs.taskName} onChange={handleChange} ref={nameInput} />
                                {
                                    showError.taskName ? <span className="red-text">Field cannot be empty.</span> : null
                                }
                            </div>
                        </label>
                        <label className="d-flex mb-3">
                            <div className="w-50">Enter Task Description
                                <span className="red-text">*</span>
                            </div>
                            <div className="w-50">
                                <textarea name="taskDesc" className="form-control" value={formInputs.taskDesc} onChange={handleChange} ref={descInput} />
                                {
                                    showError.taskDesc ? <span className="red-text">Field cannot be empty.</span> : null
                                }
                            </div>
                        </label>
                        <label className="d-flex mb-3">
                            <div className="w-50">Enter Task Status
                                <span className="red-text">*</span>
                            </div>
                            <select name="taskStatus" className="w-50 form-control" value={formInputs.taskStatus} onChange={handleChange}>
                                {
                                    statusOfTask.map((status) => (
                                        <option key={status} value={status}>{status}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        {closeButton}
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        {saveButton}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AppHeader;