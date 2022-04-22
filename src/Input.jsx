import React from "react";

function Input() {
    return (
        <div>
            <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  bg-gray-50 w-2/3  rounded-md" type={props.type} />
        </div>
    );
}

export default Input;