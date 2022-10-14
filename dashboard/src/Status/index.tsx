import React from "react";
import Title from "./title";

interface StatusProps {
    status: string;
}

function Status({ status }:StatusProps) {
    return (
        <div className="grey-bg status-card p-2">
            <Title name = {status} />
        </div>
    );
}

export default Status;