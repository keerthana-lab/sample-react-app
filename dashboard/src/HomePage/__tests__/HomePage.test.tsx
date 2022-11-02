import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, test, expect } from '@jest/globals';
import { BrowserRouter } from "react-router-dom";
import { HomePage } from "..";
import { AppTitle } from "../../constants";

function renderHomePage() {
    render(<BrowserRouter><HomePage /></BrowserRouter>);
}

describe("Home Page", () => {
    test("should render app title", async () => {
        renderHomePage();
        const appName = (await screen.findByRole("heading")).textContent;
        expect(appName).toEqual(AppTitle);
    });
});
