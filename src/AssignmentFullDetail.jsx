import React, { useEffect } from "react"
import AssignmentDetailPage from "./AssignmentDetailPage"
import { useParams } from "react-router-dom";
import axios from "axios";

function AssignmentFullDetail() {

  const [assignmentsDetail, updateAssignmentsDetail] = React.useState(undefined);
  const data = useParams()
  console.log("data", data)
  useEffect(() => {

    const promise = axios.get(`https://api.codeyogi.io/assignments/${data.id}`, { withCredentials: true, });
    promise.then((assignmentDetail) =>
      updateAssignmentsDetail(assignmentDetail.data)
    )
  }, [])

  return (
    <div>
      {assignmentsDetail && < AssignmentDetailPage assignmentDetail={assignmentsDetail} />}
    </div>
  );
}

export default AssignmentFullDetail;