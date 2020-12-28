import React,{useState } from 'react';

function HooksPage(props){
    const [count,setCount] = useState(0);
    return(<div>
            <p>You have clicked the like button {count} times </p>
            <button className=".btn-primary" onClick={() => setCount(count+1)}>Like</button>
    </div>);
}
export default HooksPage;