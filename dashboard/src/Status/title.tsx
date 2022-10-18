import React from "react";
import { Link } from "react-router-dom";

interface TitleProps {
    name: string;
}

function Title({ name }: TitleProps) {
    return (
        <div className="p-2">
            <Link to="/todo">
                <strong className="dark-grey-text">
                    {name.toUpperCase()}
                </strong>
            </Link>
        </div>
    );
}
export default Title;