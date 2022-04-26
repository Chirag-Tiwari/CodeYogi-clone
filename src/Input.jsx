import React from "react";

function Input(props) {
    return (
        <div>
            <input name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  bg-gray-50 w-2/3  rounded-md" type={props.type} />
            <div className="h-3">
                {props.error && <span className="text-red-500">{props.error}</span>}
            </div>
        </div>
    );
}

export default Input;