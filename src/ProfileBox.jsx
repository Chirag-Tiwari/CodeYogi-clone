import Input from "./Input";
import React from "react";

function ProfileBox(props) {
  return (
    <div className="mt-5 border-t border-gray-200 flex justify-between items-center pt-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{props.children}</h3>
      </div>
      <div className="w-3/5">
        <Input
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          type={props.type}
        />
      </div>
    </div>
  );
}

export default ProfileBox;
