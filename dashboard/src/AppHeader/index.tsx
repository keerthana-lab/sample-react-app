import React from "react";
import { AppTitle } from "../constants";

function AppHeader() {
    return (
        <h1 className="m-3">{AppTitle}</h1>
    );
}

export default AppHeader;