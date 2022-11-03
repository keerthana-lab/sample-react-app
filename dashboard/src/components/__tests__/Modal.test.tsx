import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, test, expect, jest } from '@jest/globals';
import { ModalComponent } from "../Modal";

function renderModalComponent() {
    const handleClose = jest.fn();
    const handleSave = jest.fn();
    render(<ModalComponent handleClose={handleClose} handleSave={handleSave}><div>Hello World !</div></ModalComponent>);
}

describe("Re-usable Modal", () => {
    test("should render modal", async () => {
        renderModalComponent();
        expect(screen.findByRole("dialog")).toBe;
        const defaultTitle = screen.findByText("Confirmation");
        expect(defaultTitle).toBe;
        const bodyText = screen.findByText("Hello World !");
        expect(bodyText).toBe;
        const button1 = await screen.findByRole("button", { name: "primary button"});
        const button2 = await screen.findByRole("button", { name: "secondary button"});
        expect(button1.textContent).toEqual("Save");
        expect(button2.textContent).toEqual("Close");
    });
});
