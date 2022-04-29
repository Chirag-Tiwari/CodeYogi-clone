import React, { useContext } from "react";
import AlertContext from "./AlertContext";
import Button from "./Button";

function Alert() {
  const alert = useContext(AlertContext);

  return (
    <div className="flex justify-end ">
      {alert.message && (
        <div className="bg-green-500 text-white w-60 flex justify-evenly text-2xl">
          <span>{alert.message}</span>
          <button
            onClick={() => {
              alert.setMessage("");
            }}
          >
            {" "}
            x{" "}
          </button>
        </div>
      )}
    </div>
  );
}

export default Alert;
