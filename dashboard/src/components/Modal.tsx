import React, { ReactNode } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import { closeButton, confirmation, saveButton } from "../constants";

interface ModalComponentProps {
    title?: string;
    handleClose: () => void;
    handleSave: () => void;
    children: ReactNode;
    buttonText?: string;
}

export function ModalComponent({ title, handleClose, handleSave, children, buttonText }: ModalComponentProps) {
    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title ?? confirmation}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    {closeButton}
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    {buttonText ?? saveButton}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

