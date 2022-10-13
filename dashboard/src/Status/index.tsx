import React from "react";
import Title from "./title";
import "../App.css";

interface StatusProps {
    status: string;
}

function Status({ status }:StatusProps) {
    return (
        <div className="col-3 grey-bg">
            <Title name = {status} />
        </div>
    );
}

export default Status;