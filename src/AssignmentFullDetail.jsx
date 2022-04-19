import React, { useEffect } from "react"
import { BasicAssignmentDetail } from "./AssignmentDetails";
import { assignmentDetail } from "./AssignmentInfo";
import AssignmentDetailPage from "./AssignmentDetailPage"
import { useParams } from "react-router-dom";
import axios from "axios";

function AssignmentFullDetail() {

  const [assignmentsDetail, updateAssignmentsDetail] = React.useState([]);
  const data = useParams()
  console.log("data", data)
  useEffect(() => {

    const promise = axios.get(`https://api.codeyogi.io/assignments/${data.id}`, { withCredentials: true, });
    promise.then((assignmentDetail) =>
      updateAssignmentsDetail(assignmentDetail.data)
    )
  }, [])

  // const selectedId = +data.id
  // const selectedAssignment = assignmentsDetail.find((assignment) => assignment.id === selectedId)
  return (
    <div>
      {assignmentsDetail.map((detail) => < AssignmentDetailPage assignmentDetail={detail} />)}
    </div>
  );
}

export default AssignmentFullDetail;