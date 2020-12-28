import React from 'react';
import HandleForm from "./HandleForm";

function FormPage(props,e){
    
    return <>
    <form>
    <input type="text" 
           id = "title" 
           name = "title" 
           value = {props.course.title} 
           onChange = {props.titleChange}  />

    <input type="submit" value = "submit" />
    </form>
    </>
}

export default FormPage;