import React , {useEffect} from "react"
import axios from "axios";
import StudentLayout from "./StudentLayout";
import Card  from "./Card";


function StudentsList(){

   const[studentData,updateStudentData] = React.useState([]);

   useEffect(()=>{
    const promise = axios.get("https://randomuser.me/api/?results=13")
    
    promise.then ((response) => {
    console.log(response);
    updateStudentData(response.data.results) ;
    });
},[]);
    
    return(
        <Card>
<div className="flex flex-wrap mx-auto">
{ studentData.map((u) => <StudentLayout student={u}/>)}
<span className="w-80 h-80 mx-auto"></span>
<span className="w-80 h-80 mx-auto"></span>
</div>
</Card>
    );
}

export default StudentsList;