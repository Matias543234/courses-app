const SUPABASE_BASE_URL = "https://nkepqbsuedxfsbsdvdzg.supabase.co/rest/v1/";
const SUPABASE_AMON_KEY = "sb_publishable_-h8xlbo0lqidy2IW80YVyA_LqViHgea";


export type Courses = {
    course_id: number;
    course_name: String;
    delivery_mode: String;

}



export type Enrolments = {
    student_id: number;
    course_id: number;
    enrolment_date: String;
    result: String;

}




export type Students = {
    student_id: number;
    first_name: String;
    last_name: String;
    email: String;




} 


export async function getCourses(){

    const response = await fetch (SUPABASE_BASE_URL + "Courses",{

        headers: {
            apikey: SUPABASE_AMON_KEY

        }

    });
    const data: Courses[] = await response.json()
    return data;


}



export async function getEnrolments(){
    const response = await fetch(SUPABASE_BASE_URL + "Enrolments",{

        headers:{
            apikey: SUPABASE_AMON_KEY

        }



    });

    const data: Enrolments[] = await response.json()
    return data;




}


export async function getStudents(){
    const response = await fetch(SUPABASE_BASE_URL + "Students", {


        headers: {
            apikey: SUPABASE_AMON_KEY


        }


    });


    const data: Students[] = await response.json()
    return data;



}