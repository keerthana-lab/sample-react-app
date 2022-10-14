import React from "react";
import { AppTitle } from "../constants";

function AppHeader() {
    return (
        <div className="d-flex justify-content-between align-items-center m-3">
            <h1>{AppTitle}</h1>
            <button type="button" className="btn btn-outline-primary h-25">Create Ticket</button>
        </div>
    );
}

export default AppHeader;