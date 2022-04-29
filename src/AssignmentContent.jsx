import React from "react";
import Card from "./Card";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { HiOutlineExternalLink } from "react-icons/hi";
import AssignmentSubmissionPopUp from "./AssignmentSubmissionPopUp";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";

function AssignmentContent({ assignment }) {
  const [showPopUp, updateShowPopUp] = React.useState(false);

  const navigate = useNavigate();

  const xyz = () => {
    updateShowPopUp(false);
  };

  return (
    <div>
      <Card>
        <div onClick={() => navigate(`/assignment/${assignment.id}`)}>
          <h3 className="font-medium">
            # {assignment.id} {assignment.title}
            <span className="text-gray-500">
              (
              {DateTime.fromISO(assignment.created_at).toLocaleString(
                DateTime.DATE_MED_WITH_WEEKDAY
              )}
              )
            </span>
          </h3>
          <div className="flex justify-between">
            <div className="my-2">
              <h1 className="text-red-600">
                Due Date:
                {DateTime.fromISO(assignment.due_date).toLocaleString(
                  DateTime.DATE_MED_WITH_WEEKDAY
                )}{" "}
              </h1>
              <h1 className="text-red-600">
                (Submission will count as late now)
              </h1>
            </div>
            <h1 className="font-semibold text-green-600">Submitted</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="text-green-600 font-medium border-r-2 border-gray-400 px-24 flex"
            onClick={() => {
              updateShowPopUp(true);
            }}
          >
            <span className="text-2xl mr-2">
              <RiCheckboxCircleLine />
            </span>
            Re-Submitt
          </button>
          <a
            className="text-indigo-500 font-medium mx-24 flex underline underline-offset-2"
            href={assignment.submissions.submission_link}
          >
            <span className="text-xl mt-1">
              <HiOutlineExternalLink />
            </span>
            See Your Submission
          </a>
        </div>
      </Card>
      {showPopUp && (
        <AssignmentSubmissionPopUp
          setIsOpen={updateShowPopUp}
          Id={assignment.id}
        />
      )}
    </div>
  );
}

export default AssignmentContent;
