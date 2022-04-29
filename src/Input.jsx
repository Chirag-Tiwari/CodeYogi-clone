import { useField } from "formik";
import React from "react";

function Input({ id, name, type, ...rest }) {
  const [field, meta] = useField(name);

  const { error, touched } = meta;

  return (
    <div>
      <input
        {...rest}
        name={name}
        id={id}
        {...field}
        className="w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 bg-gray-50 rounded-md"
        type={type}
      />
      <div className="h-3">
        {touched && error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
}

export default Input;
