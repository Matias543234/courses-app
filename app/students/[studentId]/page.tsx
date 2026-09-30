"use client"


import {useParams} from "next/navigation"
import { useEffect, useState } from "react";
import {getStudents, Students} from  "@/lib/apiSupabase";
import style from "./page.module.css"

export default function StudentPage(){
   
const params = useParams();
const[student, setStudent] = useState <Students>();

useEffect(() => {
    getStudents().then((data) => {
        const foundStudent = data.find(
            (item) => item.student_id === Number(params.studentId)




        );

        setStudent(foundStudent)
    });

}, [params.studentId]);

return <>

<h1 className={style.title}>{student?.first_name} {student?.last_name}</h1>
<div className={style.email}>
    <p>Email: {student?.email}</p>
</div>


</>

}