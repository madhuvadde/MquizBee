import React from 'react';
import { getCourses } from "../api/courseApi";
class CoursesPage extends React.Component{
    state = {
            courses:[]
        };
    
    componentDidMount(){
        getCourses().then(courses => this.setState({courses:courses}));
    }
    render(){
        return <>
        <h1 className="jumbotron">Courses</h1>
        <table className="table">
        <thead>
        <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category ID</th>
        </tr>
        </thead>
        <tbody>
        {this.state.courses.map(course => {
            return <tr>
               <td>{course.title}</td> 
               <td>{course.authorId}</td>
               <td>{course.category}</td>
              </tr>  
        })}
        </tbody>
        </table>
        </>
    }
}
export default CoursesPage;