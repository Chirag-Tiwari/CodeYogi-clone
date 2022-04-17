import React, { useEffect } from "react"
import { assignmentDetail } from "./AssignmentInfo"
import axios from "axios";
import AssignmentContent from "./AssignmentContent"


function AssignmentList() {

  const [assignments, updateAssignments] = React.useState([]);

  useEffect(() => {

    const promise = axios.get("https://api.codeyogi.io/batches/1/assignments", { withCredentials: true, });
    promise.then((assignment) =>
      updateAssignments(assignment.data)
    )
  }, [])


  return (
    <div>
      <h1 className="mb-5 text-xl font-semibold ">Assignment List</h1>
      <div className="bg-gray-50 h-full px-32">
        {assignments.map((assignment) => <AssignmentContent assignment={assignment} />)}
      </div>
    </div>
  );
}

export default AssignmentList;