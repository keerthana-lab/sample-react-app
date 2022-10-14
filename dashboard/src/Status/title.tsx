import React from "react";

interface TitleProps {
    name: string;
}

function Title({ name }: TitleProps) {
    return (
        <div className="p-2">
            <strong className="dark-grey-text">
                {name.toUpperCase()}
            </strong>
        </div>
    );
}
export default Title;