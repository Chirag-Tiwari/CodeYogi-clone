import React from "react";

function Card(props) {
    return (
        <div className="w-full border-2 border-gray-100 bg-white rounded-lg shadow-lg my-5 p-3">
            {props.children}
        </div>
    );
}

export default Card;