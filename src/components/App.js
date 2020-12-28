import React from 'react';
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import Header from "../common/Header";
import CoursesPage from "./CoursesPage";
import {  Route,Switch, Redirect } from "react-router-dom";
import PageNotFound from "./PageNotFound.js";
import FormPage from "./FormPage";


function App(props){
    return (<div className="container-fluid">
    <Header />
    <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/courses" component={CoursesPage} />
    <Redirect from="/about-go" to="/about" />
    <Route path="/form" component={FormPage} />
    <Route component={PageNotFound} />
    </Switch>
    </div>);
    
}

export default App;