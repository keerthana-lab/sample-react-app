import React from "react";
import "../App.css";

interface TitleProps {
    name: string;
}

function Title({ name }: TitleProps) {
    return (
        <div className="dark-grey-text text-center">
            <strong>
                {name.toUpperCase()}
            </strong>
        </div>
    );
}
export default Title;