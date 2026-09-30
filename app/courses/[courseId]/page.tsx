"use client"

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCourses, Courses, getEnrolments, Enrolments } from "@/lib/apiSupabase";
import style from "./page.module.css"


export default function CoursePage(){

const params = useParams();
const [course, setCourse] = useState<Courses>();
const [enrolments, setEnrolments] = useState<Enrolments[]>([]);

useEffect(() => {
    getCourses().then((data) => {


        const foundCourse = data.find(
            (item) => item.course_id === Number(params.courseId)

            );
        setCourse(foundCourse);
    });
    getEnrolments().then((data) =>{
        const courseEnrolments = data.filter(
            (item) => item.course_id === Number(params.courseId)

     
        );
        setEnrolments(courseEnrolments);
    });
}, [params.courseId]);

return <>

<div className={style.title}>
    <h1>{course?.course_name}</h1>
    <p>Delivery mode: {course?.delivery_mode}</p>
</div>
    <br></br>
    <h2 className={style.heading}>Enrolments</h2>
    <br></br>
<div className={style.Enrolments}>
    {enrolments.map((item) => (

        <Link href={`/students/${item.student_id}`} key={item.student_id}>

            Student ID: {item.student_id}

        </Link>


    ))}
</div>
</>
}



