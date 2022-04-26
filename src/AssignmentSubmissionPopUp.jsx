
import { useState } from "react";
import Button from "./Button";
import axios from "axios"
import { useParams } from "react-router-dom";
import Input from "./Input";
import { useForms } from "./forms";

function AssignmentSubmissionPopUp({ setIsOpen, ...props }) {

    const submitAssignment = (formData) => {

        axios.put(`https://api.codeyogi.io/assignment/${props.Id}/submit`, { submissionLink: formData.URL }, { withCredentials: true });
        setIsOpen(false);

    }

    const { formData, errorMessage, handleChange, assignmentSubmit } = useForms({ URL: "" }, submitAssignment)





    const data = useParams()


    console.log(props.Id)

    return (
        <form onSubmit={assignmentSubmit} className="bg-white p-4 rounded-md w-2/5 h-44 border border-gray-600 fixed top-1/4 left-1/4 items-center ">
            <div className="flex flex-col ">
                <div className="flex border-y border-gray-200 py-5">
                    <h2 className="px-3 py-1 font-medium text-gray-500">Submission Link</h2>
                    <Input name="URL" error={errorMessage} value={formData.URL} onChange={handleChange} className="w-full px-3 py-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md" placeholder="Submission Link" type="text" />
                </div>
                <div className="py-4">
                    <Button>Submit</Button>
                </div>
            </div>
        </form>
    );
}

export default AssignmentSubmissionPopUp;
