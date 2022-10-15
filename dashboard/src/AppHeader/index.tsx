import React, { useState } from "react";
import { AppTitle, createTicketLabel } from "../constants";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AppHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="d-flex justify-content-between align-items-center m-3">
            <h1>{AppTitle}</h1>
            <Button variant="outline-primary" onClick={handleShow}>{createTicketLabel}</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AppHeader;