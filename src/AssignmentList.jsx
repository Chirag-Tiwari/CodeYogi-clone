import React from "react"
import {assignmentDetail} from "./AssignmentInfo"
import Card from "./Card"
import AssignmentContent from "./AssignmentContent"

function AssignmentList(){
  return(
    <div>
      <h1 className="mb-5 text-xl font-semibold">Assignment List</h1>
       <div className="bg-gray-50 h-full px-32">
      {assignmentDetail.map((assignment)=><AssignmentContent Name={assignment.Name} date={assignment.date} dueDate={assignment.dueDate} id={assignment.id} key={assignment.id} link={assignment.link}></AssignmentContent>)}
       </div>
      </div>
  );
}

export default AssignmentList;