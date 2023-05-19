import React, { useState, useEffect } from 'react'
import style from './Quiz.module.css'
import { QuizData } from '../../../Data/Data'
import Quizresult from './Quizresult'
export default function Quiz() {
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [clickOption, setclickoption] = useState(0)
    const [show, setShow] = useState(false)
    const [btnSubmit, setbtnSubmit] = useState(true)
    const [timer, setTimer] = useState(600);


    useEffect(() => {

        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            changeQuestion()
        }, 60000)

        return () => clearInterval(interval)
    }, [currentQuestion])


// function for change Question 
    function changeQuestion() {
      updateScore();

        if (currentQuestion == QuizData.length - 2) {
            setbtnSubmit(false)
        }
        if (currentQuestion < QuizData.length - 1) {
            setcurrentQuestion(currentQuestion + 1)
            setclickoption(0)


        } else {
            setShow(true)

        }

    }
    //update score
    function updateScore() {
        if (clickOption === QuizData[currentQuestion].answer) {
            setScore(score + 2)

        }

    }

//reset all
    function reset() {
        setShow(false)
        setcurrentQuestion(0)
        setclickoption(0)
        setScore(0)
        setbtnSubmit(true)
        setTimer(600)
    }

    return (


        <div>

            <h1 className={style.heading}>QUIZ APP  <h1></h1></h1>

            <div className={style.container}>
                {show ? (
                    <Quizresult score={score} totalScore={QuizData.length * 2} tryAgain={reset}  />
                ) : (
                    <>
                        <div className={style.question}>
                            <span id={style.question}>{currentQuestion + 1}.</span>
                            <span id={style.qtext}>{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className={style.optionContainer}>
                            {QuizData[currentQuestion].options.map((options, i) => {
                                return (<button type='radio' className={`option-btn ${clickOption == i +1 ? "checked" : null}`}
                                    key={i}
                                    onClick={() => setclickoption(i + 1)}
                                    
                                >{options}</button>)
                            })}
                        </div>
                        {btnSubmit ? (<><input type="button" value="Next" onClick={changeQuestion} className={style.button} /></>) : (<><button onClick={changeQuestion} className={style.button}>Submit</button></>)}
                        <h1> Second: {timer} </h1>

                    </>)}
            </div>

        </div>
    )
}
