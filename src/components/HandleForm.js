import React,{ useState } from 'react';
import FormPage from "./FormPage";




function HandleForm(){
    const [course,setCourse] = useState({
        title:""
    }
    );
    function handleTitleChange(event){
       const updatedCourse = {...course};
       updatedCourse.title = event.target.value;
       setCourse(updatedCourse);
       }
    return <>
    <FormPage course = { course } titleChange = { handleTitleChange } />
    </>
}
export default HandleForm;
