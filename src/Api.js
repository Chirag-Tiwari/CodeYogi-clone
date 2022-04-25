import axios from "axios";

const storage = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const getAssignment = async () => {
    const promise = await axios.get("https://api.codeyogi.io/batches/1/assignments", { withCredentials: true, });

    const assignments = promise.data;

    storage(assignments, "assignments");
    return assignments;

}

export const getLecture = () => {
    const promise = axios.get("https://api.codeyogi.io/batches/1/sessions", { withCredentials: true });
    return promise.then((Lecture) => {
        const lectures = Lecture.data;
        localStorage.setItem("lectures", JSON.stringify(lectures));

        return lectures
    });
}

export const putAssignment = (URL) => {
    axios.put(`https://api.codeyogi.io/assignment/${props.Id}/submit`, { submissionLink: URL }, { withCredentials: true });
}

