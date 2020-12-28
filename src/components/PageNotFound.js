import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(props){
    return <div>
        <h1 className="text-danger">404 Page Not Found</h1>
        <Link to="/" >Back to home</Link>
    </div>
}

export default PageNotFound;