import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, test, expect } from '@jest/globals';
import { ModalComponent } from "../Modal";

function renderModalComponent() {
    const handleClose = () => console.log("Close Modal");
    const handleSave = () => console.log("Save data");
    render(<ModalComponent handleClose={handleClose} handleSave={handleSave}><div>Hello World !</div></ModalComponent>);
}

describe("Re-usable Modal", () => {
    test("should render modal", async () => {
        renderModalComponent();
        const defaultTitle = screen.findByText("Confirmation");
        expect(defaultTitle).toBe;
        const bodyText = screen.findByText("Hello World !");
        expect(bodyText).toBe;
        const button1 = screen.findByText("Close");
        const button2 = screen.findByText("Save");
        expect(button1).toBe;
        expect(button2).toBe;
    });
});
