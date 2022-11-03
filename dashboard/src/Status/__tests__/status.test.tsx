import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { jest, describe, test, expect } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import Status from "../index";
import { TaskContext } from "../../HomePage";
import { closeButton } from "../../constants";

const ticketDetails = [{
    taskId: 1,
    taskName: "Reading",
    taskDesc: "PS1",
    taskStatus: "My Dummy Status"
},
{
    taskId: 2,
    taskName: "Walking",
    taskDesc: "Go for a walk every morning at 6am",
    taskStatus: "Done"
}];

const handleDelete = jest.fn();

function renderStatusComponent() {
    render(
        <BrowserRouter>
            <TaskContext.Provider value={{ ticketDetails, handleDelete }}>
                <Status status="My Dummy Status" />
                <Status status="Done" />
            </TaskContext.Provider>
        </BrowserRouter>);
}

describe("Status component", () => {
    test("should render Status section title", async () => {
        renderStatusComponent();
        const statusTitle = screen.findByText(/My Dummy Status/i);
        expect(statusTitle).toBe;
    });

    test("should render ticket details and delete a task", async () => {
        renderStatusComponent();
        expect(screen.findByText(/PS1/i)).toBe;
        expect(screen.findByText(/Go for a walk every morning at 6am/i)).toBe;
        const deleteTask1Button = await screen.findByRole("button", { name: "Delete1"});
        fireEvent.click(deleteTask1Button);
        const confirmationText = screen.findByText("Are You Sure to delete the Task ?");
        expect(confirmationText).toBe;
        const confirmDeleteButton = await screen.findByRole("button", { name: "primary button"});
        fireEvent.click(confirmDeleteButton);
        expect(screen.findByText(/PS1/i)).not.toBe;
    });

    test("should cancel delete in confirmation dialog", async () => {
        renderStatusComponent();
        expect(screen.findByText(/PS1/i)).toBe;
        const deleteTask2Button = await screen.findByRole("button", { name: "Delete2"});
        fireEvent.click(deleteTask2Button);
        const confirmationText = screen.findByText("Are You Sure to delete the Task ?");
        expect(confirmationText).toBe;
        const closeDialogButton = await screen.findByRole("button", { name: "secondary button"});
        fireEvent.click(closeDialogButton);
        expect(screen.findByText(/PS1/i)).toBe;
    });
});
