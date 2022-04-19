
import React from "react";
import Button from "./Button";
import axios from "axios"
import { useParams } from "react-router-dom";

function AssignmentSubmissionPopUp({ setIsOpen }) {
    const [assignmentUrl, setAssignmentUrl] = React.useState('')
    const inputChange = (event) => {
        setAssignmentUrl(event.target.value)
    }
    const data = useParams()

    const submitAssignment = () => {
        axios.put(`https://api.codeyogi.io/assignment/${data.id}/submit`, { submissionLink: assignmentUrl }, { withCredentials: true });
        setIsOpen(false);
    }

    return (
        <div className="bg-white p-4 rounded-md w-2/5 h-44 border border-gray-600 fixed  items-center ">
            <div className="flex flex-col">
                <div className="flex border-y border-gray-200 py-5">
                    <h2 className="px-3 py-1 font-medium text-gray-500">Submission Link</h2>
                    <input value={assignmentUrl} onChange={inputChange} className="w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md" placeholder="Submission Link" type="text" />
                </div>
                <div className="py-4">
                    <Button onClick={submitAssignment}>Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default AssignmentSubmissionPopUp;