import React,{useState, useEffect} from 'react';
 function HackerRank({slides}){
     const [count,setCount] = useState(0);
     useEffect(()=>{
         const next = document.getElementById('nextBtn');
         const prev = document.getElementById('prevBtn');
         const restart = document.getElementById('rest');
            if(count === slides.length - 1){
                next.disabled = true;
                prev.disabled = false; 
            }
            else if(count === 0){
                prev.disabled = true;
                next.disabled = false;
                restart.disabled = true;
            }
            else{
                next.disabled = false;
                prev.disabled = false;
                restart.disabled = false;
            }
         console.log(count);
     },[count]);
     return(
         <div>
             <table>
                 <tr>
                     <th>
                     <button className="btn btn-primary" id="rest" onClick = {()=>{setCount(0)}}>Restart</button>
                     </th>
                     <th></th>
                     <th>
                     <button className="btn btn-primary" id="nextBtn" onClick = {()=>setCount(count+1)}>next</button>
                     </th>
                     <th></th>
                     <th>
                     <button className="btn btn-primary" id="prevBtn" onClick = {()=>setCount(count-1)}>prev</button>  
                     </th>
                 </tr>        
             </table>
             <div className="jumbotron">
              <h1 id="title">{slides[count].title}</h1>
             <p id="text">{slides[count].text}</p>
             </div>
         </div>
     );

 }
 export default HackerRank;