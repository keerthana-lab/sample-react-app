import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import React from "react";
import { AppHeader } from "..";
import { newTask } from "../../constants";
import { describe, test, expect, jest } from '@jest/globals';

function renderAppHeader() {
    const getTicketDetails = jest.fn();
    render(<AppHeader getTicketDetails={getTicketDetails} />);
}

describe("App Header", () => {
    test("should create ticket", async () => {
        renderAppHeader();
        const createTicketButton = await screen.findByRole("button", { name: "create ticket"});
        fireEvent.click(createTicketButton);
        const modal = screen.findByRole("dialog");
        expect(modal).toBe;
        expect(screen.findByText(newTask)).toBe;
        const taskNameInput = screen.getByLabelText(/Enter Task Name/i);
        userEvent.type(taskNameInput, "Read Book");
        const taskDescInput = screen.getByLabelText(/Enter Task Description/i);
        userEvent.type(taskDescInput, "Ponniyin Selvan Volume 1");
        const taskStatusInput = screen.getByLabelText(/Enter Task Status/i);
        userEvent.selectOptions(taskStatusInput, "To Do");
        const saveButton = await screen.findByRole("button", { name: "primary button"});
        fireEvent.submit(saveButton);

        await waitFor(() => {
            expect(modal).not.toBe;
            expect(screen.findByText("1")).toBe;
            expect(screen.findByText("Read Book")).toBe;
            expect(screen.findByText("Ponniyin Selvan Volume 1")).toBe;
            expect(screen.findByRole("button", { name: "Delete"})).toBe;
        });
    });

    test("should test form validations", async () => {
        renderAppHeader();
        const createTicketButton = await screen.findByRole("button", { name: "create ticket"});
        fireEvent.click(createTicketButton);
        const saveButton = await screen.findByRole("button", { name: "primary button"});
        fireEvent.click(saveButton);

        await waitFor(() => {
            expect(screen.findByText("Name cannot be empty.")).toBe;
            expect(screen.findByText("Description cannot be empty.")).toBe;
            expect(screen.findByText("Select the status of task.")).toBe;
        });
    });

    test("should test close click", async () => {
        renderAppHeader();
        const createTicketButton = await screen.findByRole("button", { name: "create ticket"});
        fireEvent.click(createTicketButton);
        const modal = screen.findByRole("dialog");
        expect(modal).toBe;
        const closeButton = await screen.findByRole("button", { name: "secondary button"});
        fireEvent.click(closeButton);
        expect(modal).not.toBe;
    });
});
