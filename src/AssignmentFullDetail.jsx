import React from "react"
import { BasicAssignmentDetail } from "./AssignmentDetails";
import { assignmentDetail }  from "./AssignmentInfo";
import AssignmentDetailPage from "./AssignmentDetailPage"
import {useParams} from "react-router-dom"

function AssignmentFullDetail(){
  const data = useParams()
  const selectedId = +data.id
  console.log("BasicAssignmentDetail ", BasicAssignmentDetail)
  const selectedAssignment = BasicAssignmentDetail.find((assignment) => assignment.id === selectedId)
  return(
    <div>
      <AssignmentDetailPage title={selectedAssignment.title} id={selectedAssignment.id} dueDate={selectedAssignment.dueDate} discription={selectedAssignment.discription}></AssignmentDetailPage>
    </div>
  );
}

export default AssignmentFullDetail;