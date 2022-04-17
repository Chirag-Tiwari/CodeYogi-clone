import React from "react";
import Button from "./Button";

function AssignmentSubmissionPopUp (){
    return(
<div className="bg-white p-4 rounded-md w-2/5 h-44 border border-gray-600">
  <div className="flex border-y border-gray-200 py-5">
      <h2 className="px-3 py-1 font-medium text-gray-500">Submission Link</h2>
      <input className="w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md" placeholder="Submission Link" type="text" />
  </div>
  <div className="py-4">
  <Button>Submit</Button>
  </div>
</div>
    );
}

export default AssignmentSubmissionPopUp;