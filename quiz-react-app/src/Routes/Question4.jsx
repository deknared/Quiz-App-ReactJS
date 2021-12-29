import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { Counter } from './counter'

const Question4 = () => {
    const [qa, setQa] = useState({
        questions: [],
        answers1: [],
        answers2: [],
        answers3: [],
        answers4: [] 
    })

    const warn_handler = () => {
        alert("Correct!")
        setCorrect(correct + 1)
    }
    const warn_handler2 = () => {
        alert("Incorrect!\nCorrect answer is b)")
        setIncorrect(incorrect + 1)
    }

    const {correct, setCorrect, incorrect, setIncorrect} = useContext(Counter);

    const getData = () => {
        var questionsNew = []
        var answers1New = []
        var answers2New = []
        var answers3New = []
        var answers4New = []

        fetch('./questions.json')
        .then(res => res.json())
        .then(res =>{
            for (const dataObj of res) {
                questionsNew.push(dataObj.question)
                answers1New.push(dataObj.answers1)
                answers2New.push(dataObj.answers2)
                answers3New.push(dataObj.answers3)
                answers4New.push(dataObj.answers4)
                }
                setQa({
                    questions: questionsNew,
                    answers1: answers1New,
                    answers2: answers2New,
                    answers3: answers3New,
                    answers4: answers4New
                })
            }
        )}
    
    useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            <center> 
            <div class="card">
                <img src="kree_blood.png" class="card-img-top" alt="liberty"/>
                <div className="card-body"> 
                <h5 class="card-title"> Q4) {qa.questions[3]}</h5>
                </div>
            </div>  
            <span className="game-options-container">
                <Link to="/Question5"> <button className="btn btn-success btn-lg" onClick={warn_handler2} > a) {qa.answers1[3]} </button> </Link> <Link to="/Question5"> <button className="btn btn-success btn-lg" onClick={warn_handler} > b) {qa.answers2[3]}</button> </Link>
            </span>
            <span className="game-options-container"> 
            <Link to="/Question5"> <button className="btn btn-success btn-lg" onClick={warn_handler2}> c) {qa.answers3[3]}</button> </Link> <Link to="/Question5"> <button className="btn btn-success btn-lg" onClick={warn_handler2}> d) {qa.answers4[3]}</button> </Link>
            </span>
            </center>

        </div>
    )
}

export default Question4