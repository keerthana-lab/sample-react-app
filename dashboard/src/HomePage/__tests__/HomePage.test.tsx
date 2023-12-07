import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { describe, test, expect, jest, beforeAll } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "..";
import { AppTitle, newTask } from "../../constants";
import userEvent from "@testing-library/user-event";
// import { useForm } from 'react-hook-form';

// jest.mock('react-hook-form', () => () => {
//     return jest.requireActual('react-hook-form');
// });

// beforeAll(() => {
//     useForm.mockImplementation(() => {
//         return jest.requireActual('useForm');
//     });
// });

function renderHomePage() {
    render(<BrowserRouter><HomePage /></BrowserRouter>);
}

describe("Home Page", () => {
    test("should render app title", async () => {
        renderHomePage();
        const appName = (await screen.findByRole("heading"));
        expect(appName.textContent).toEqual(AppTitle);
    });

    test("should create ticket", async () => {
        renderHomePage();
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

    test("should test create ticket form validations", async () => {
        renderHomePage();
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

    test("should test close click in create ticket form", async () => {
        renderHomePage();
        const createTicketButton = await screen.findByRole("button", { name: "create ticket"});
        fireEvent.click(createTicketButton);
        const modal = screen.findByRole("dialog");
        expect(modal).toBe;
        const closeButton = await screen.findByRole("button", { name: "secondary button"});
        fireEvent.click(closeButton);
        expect(modal).not.toBe;
    });
    
});
