import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { AppHeader } from "..";
import { newTask } from "../../constants";

function renderAppHeader() {
    const getTicketDetails = (ticket) => { console.log(ticket); }
    render(<AppHeader getTicketDetails={getTicketDetails} />);
}

it("should render modal on click of create ticket button", async () => {
    renderAppHeader();
    const createTicketButton = await screen.findByTestId("create-ticket-button");
    fireEvent.click(createTicketButton);
    const modal = screen.findByText(newTask);
    expect(modal).toBe;
});