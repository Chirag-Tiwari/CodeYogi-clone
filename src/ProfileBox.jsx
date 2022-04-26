import React from "react";

function ProfileBox(props) {
    return (
        <div className="mt-5 border-t border-gray-200 flex justify-between items-center pt-4">
            <h3 className="text-sm font-medium text-gray-500">{props.children}</h3>

            <input placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  bg-gray-50 w-2/3  rounded-md" type={props.type} />
        </div>
    );
}

export default ProfileBox; 