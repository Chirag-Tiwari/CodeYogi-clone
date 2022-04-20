import React from "react"
import Card from "./Card";
import { DateTime } from "luxon";
import MDEditor from '@uiw/react-md-editor';
import { HiOutlineExternalLink } from "react-icons/hi";
import Button from "./Button"

function AssignmentDetailPage({ assignmentDetail }) {
  // {assignmentDetail.description}
  return (
    <Card>
      <h3 className="text-lg font-medium">Assignment Detail</h3>
      <div className="flex ">
        <p className="text-gray-500 font-medium ">Title </p><span className="px-40"></span><p>{assignmentDetail.title}</p>
      </div>
      <div className="flex">
        <p className="text-gray-500 font-medium">Due Date </p><span className="px-40"></span><p>{DateTime.fromISO(assignmentDetail.due_date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)} </p>
      </div>
      <div className="flex">
        <div className="text-gray-500 font-medium py-2">Description </div><span className="px-40"></span>
        <div className=" py-2 font-medium">
          <MDEditor.Markdown className="markdown" source={assignmentDetail.description} />
        </div>
      </div>
      <div className="flex">
        <Button>Re-Submitt</Button>
        <a className="text-indigo-500 font-medium mx-24 flex underline underline-offset-2 mt-1" href={assignmentDetail.submissions.submission_link}><span className="text-xl mt-1"><HiOutlineExternalLink /></span>See Your Submission</a>
      </div>
    </Card>
  );
}

export default AssignmentDetailPage;