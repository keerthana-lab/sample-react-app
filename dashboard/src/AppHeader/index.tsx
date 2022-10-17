import React, { useContext, useState } from "react";
import { AppTitle, closeButton, createTicketLabel, newTask, saveButton, statusOfTask } from "../constants";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TaskContext } from "../HomePage";

interface AppHeaderProps {
    setFormInputs: (values: any) => void;
}

function AppHeader({setFormInputs}: AppHeaderProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formInputs = useContext(TaskContext);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formInputs));
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
                            <div className="w-50">Enter Task Name:</div>
                            <input type="text" className="w-50" name="taskName" value={formInputs.taskName} onChange={handleChange} />
                        </label>
                        <label className="d-flex mb-3">
                        <div className="w-50">Enter Task Description:</div>
                            <textarea name="taskDesc" className="w-50" value={formInputs.taskDesc} onChange={handleChange} />
                        </label>
                        <label className="d-flex mb-3">
                        <div className="w-50">Enter Task Status:</div>
                        <select name="taskStatus" className="w-50" value={formInputs.taskStatus} onChange={handleChange}>
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