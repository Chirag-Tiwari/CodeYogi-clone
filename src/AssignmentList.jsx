import React, { useEffect } from "react"
import axios from "axios";
import AssignmentContent from "./AssignmentContent"
import { getAssignment } from "./Api"

function AssignmentList() {

  const [assignments, updateAssignments] = React.useState([]);

  useEffect(() => {

    const promise = getAssignment()
    promise.then((assignment) => {
      updateAssignments(assignment);
    })
  }, []);


  return (
    <div>
      <h1 className="mb-5 text-xl font-semibold ">Assignment List</h1>
      <div className="bg-gray-50 h-full px-32">
        {assignments.map((assignment) => <AssignmentContent assignment={assignment} key={assignment.id} />)}
      </div>
    </div>
  );
}

export default AssignmentList;