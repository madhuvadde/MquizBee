import React from 'react';
import { Link , Prompt} from "react-router-dom";
function HomePage(props){
return (<div className="jumbotron">
    <h1> React Administartion</h1>
    <h3> React,Flux and ultra-responsive Websites </h3>
    <Link to="about" className="btn btn-primary"> About </Link>
    {/* <Prompt when={true} message = "Are you sure you want to Leave this Page?" /> */}

</div>);
}

export default HomePage;