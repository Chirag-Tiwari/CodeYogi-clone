import React, { useEffect } from "react"
import axios from "axios";
import StudentLayout from "./StudentLayout";
import Card from "./Card";
import {getStudent ,getStorage} from "./Api"


function StudentsList() {
    const cachedData = getStorage("students") || [];

    const [studentData, updateStudentData] = React.useState(cachedData);

    useEffect(() => {
        const promise = getStudent()

        promise.then((response) => {
            console.log(response);
            updateStudentData(response);
        });
    }, []);

    return (
        <Card>
            <div className="flex flex-wrap mx-auto">
                {studentData.map((u) => <StudentLayout student={u} />)}
                <span className="w-80 h-80 mx-auto"></span>
                <span className="w-80 h-80 mx-auto"></span>
            </div>
        </Card>
    );
}

export default StudentsList;