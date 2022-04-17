import React from "react";

function Button (props){
    return(
     <button className="px-8 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center">{props.children}</button>
    );
}

export default Button ;