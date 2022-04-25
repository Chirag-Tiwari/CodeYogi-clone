
import { useState } from "react";
import Button from "./Button";
import axios from "axios"
import { useParams } from "react-router-dom";
import { string } from 'yup';
import Input from "./Input";

function AssignmentSubmissionPopUp({ setIsOpen, ...props }) {
    const [assignmentUrl, setAssignmentUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const inputChange = (event) => {
        setAssignmentUrl(event.target.value)
    }

    const data = useParams()

    const submitAssignment = (event) => {

        event.preventDefault();

        const urlValidator = string().url("please enter a valid url");

        try {
            urlValidator.validateSync(assignmentUrl);
        } catch (e) {
            setErrorMessage(e.message);
            return;
        }

        axios.put(`https://api.codeyogi.io/assignment/${props.Id}/submit`, { submissionLink: assignmentUrl }, { withCredentials: true });
        setIsOpen(false);

    }

    console.log(props.Id)

    return (
        <form onSubmit={submitAssignment} className="bg-white p-4 rounded-md w-2/5 h-44 border border-gray-600 fixed top-1/4 left-1/4 items-center ">
            <div className="flex flex-col ">
                <div className="flex border-y border-gray-200 py-5">
                    <h2 className="px-3 py-1 font-medium text-gray-500">Submission Link</h2>
                    <Input error={errorMessage} value={assignmentUrl} onChange={inputChange} className="w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md" placeholder="Submission Link" type="text" />
                </div>
                <div className="py-4">
                    <Button>Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default AssignmentSubmissionPopUp;
