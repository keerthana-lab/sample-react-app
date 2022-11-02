import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import React from "react";
import { AppHeader } from "..";
import { newTask } from "../../constants";
import { describe, test, expect } from '@jest/globals';

function renderAppHeader() {
    const getTicketDetails = (ticket) => { console.log(ticket); }
    render(<AppHeader getTicketDetails={getTicketDetails} />);
}

describe("App Header", () => {
    test("should create ticket", async () => {
        renderAppHeader();
        const createTicketButton = await screen.findByTestId("create-ticket-button");
        fireEvent.click(createTicketButton);
        const modal = screen.findByText(newTask);
        expect(modal).toBe;
        const taskNameInput = screen.getByLabelText(/Enter Task Name/i);
        userEvent.type(taskNameInput, "Read Book");
        const taskDescInput = screen.getByLabelText(/Enter Task Description/i);
        userEvent.type(taskDescInput, "Ponniyin Selvan Volume 1");
        const taskStatusInput = screen.getByLabelText(/Enter Task Status/i);
        userEvent.selectOptions(taskStatusInput, "To Do");
        const saveButton = await screen.findByText("Save");
        fireEvent.submit(saveButton);

        await waitFor(() => {
            expect(modal).not.toBe;
            expect(screen.findByText("1")).toBe;
            expect(screen.findByText("Read Book")).toBe;
            expect(screen.findByText("Ponniyin Selvan Volume 1")).toBe;
            expect(screen.findByText("Delete")).toBe;
        });
    });

    test("should test form validations", async () => {
        renderAppHeader();
        const createTicketButton = await screen.findByTestId("create-ticket-button");
        fireEvent.click(createTicketButton);
        const saveButton = await screen.findByText("Save");
        fireEvent.click(saveButton);

        await waitFor(() => {
            expect(screen.findByText("Name cannot be empty.")).toBe;
            expect(screen.findByText("Description cannot be empty.")).toBe;
            expect(screen.findByText("Select the status of task.")).toBe;
        });
    });

    test("should test close click", async () => {
        renderAppHeader();
        const createTicketButton = await screen.findByTestId("create-ticket-button");
        fireEvent.click(createTicketButton);
        const modal = screen.findByText(newTask);
        expect(modal).toBe;
        const closeButton = await screen.findByText("Close");
        fireEvent.click(closeButton);
        expect(modal).not.toBe;
    });
});
