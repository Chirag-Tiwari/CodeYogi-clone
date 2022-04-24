import axios from "axios";

export const getAssignment = () => {
    const promise = axios.get("https://api.codeyogi.io/batches/1/assignments", { withCredentials: true, });

    const assignmentPromise = promise.then((assignment) => {
        const assignments = assignment.data;
        localStorage.setItem("assignments", JSON.stringify(assignments));

        return assignments;
    });
    return assignmentPromise;
}

export const getLecture = () => {
    const promise = axios.get("https://api.codeyogi.io/batches/1/sessions", { withCredentials: true });
    return promise.then((Lecture) => {
        const lectures = Lecture.data;
        localStorage.setItem("lectures", JSON.stringify(lectures));

        return lectures
    });
}