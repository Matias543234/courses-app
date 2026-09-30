"use client";

import Link from "next/link";
import {useState, useEffect} from "react";
import {getCourses, Courses} from "@/lib/apiSupabase";
import style from "./page.module.css";

export default function Home(){

  const [courses, setCourses] = useState<Courses[]>([]);
  useEffect(() => {

    getCourses().then((data) => {

        setCourses(data);

    });

}, []);

return <>

  <h1 className={style.title}>Courses</h1>
 <div className = {style.courses}>
  
  {courses.map((item) => (

    <Link href={`/courses/${item.course_id}`} key={item.course_id}>{item.course_name}</Link>


  ))}


  </div> 
</>
}