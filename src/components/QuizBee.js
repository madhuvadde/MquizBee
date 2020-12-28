import React from 'react'
import "./style.css";
import Data from "./Data";
import { useState, useEffect } from 'react';
import QuestionBox from './QuestionBox';
import Result from './Result';


function QuizBee() {
    const [questionBank, setQuestionBank] = useState([]);
    const [score, setScore] = useState(0);
    const [responses, setResponses] = useState(0);
   
    useEffect(()=>{
        Data().then(question =>{
            setQuestionBank(question)
        });
    },[questionBank.length]);

    function playAgain(){
     window.location.reload(false);
     setScore(0);
     setResponses(0);
    }
    function computeAnswer(answer,correctAnswer){
        if(answer === correctAnswer)
                setScore(score+1)
        //console.log("Score Count :"+score);
    }
    
    
    return (
        <div className="container">
            <div className="title">
              MquizBee 
            </div>
          {questionBank.length > 0 && responses < 5 && questionBank.map(
              ({question,answers,correct,questionId})=>(
                <QuestionBox questions = {question} 
                options = {answers} 
                key={questionId} 
                selected = {(answer) => {computeAnswer(answer,correct);setResponses(responses+1);}}
                />
              )
          )
         }
         {responses === 5?(<Result scores={score} playAgain={playAgain} />):null}
        </div>
    )
}

export default QuizBee
