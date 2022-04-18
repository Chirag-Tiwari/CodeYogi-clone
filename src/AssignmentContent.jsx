import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import AssignmentSubmissionPopUp from "./AssignmentSubmissionPopUp";
import { useNavigate } from "react-router-dom"

function AssignmentContent({ assignment }) {

  //to={`/assignment/${assignment.id}/details`}

  const [showPopUp, updateShowPopUp] = React.useState(false);

  const navigate = useNavigate()

  return (
    <div>
      <Card>
        <div onClick={() => navigate(`/assignment/${assignment.id}/details`)}>
          <h3 className="font-medium"># {assignment.id} {assignment.title}<span className="text-gray-500">({assignment.created_at})</span></h3>
          <div className="flex justify-between">
            <div className="my-2">
              <h1 className="text-red-600">{assignment.due_date} </h1>
              <h1 className="text-red-600">(Submission will count as late now)</h1>
            </div>
            <h1 className="font-semibold text-green-600">Submitted</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-green-600 font-medium border-r-2 border-gray-400 px-24 flex" onClick={() => { updateShowPopUp(!showPopUp) }}><span className="text-2xl mr-2"><RiCheckboxCircleLine /></span>Re-Submitt</button>
          <a className="text-indigo-500 font-medium mx-24 flex underline underline-offset-2" href={assignment.submissions.submission_link}><span className="text-xl mt-1"><HiOutlineExternalLink /></span>See Your Submission</a>
        </div>
      </Card>
      {showPopUp && <AssignmentSubmissionPopUp />}
    </div>
  );
}

export default AssignmentContent;