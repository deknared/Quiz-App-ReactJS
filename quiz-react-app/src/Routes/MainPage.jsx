import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutPage from "./AboutPage"
import HomePage from "./HomePage"
import HeaderPage from "./HeaderPage"
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"
import Question6 from "./Question6"
import Question7 from "./Question7"
import Results from "./Results"
import { Counter } from "./counter"
import { useState } from "react"

const MainPage = () => {
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorrect] = useState(0)

    return (
        <BrowserRouter>
        <div>
            <HeaderPage/>
            <Counter.Provider value = {{correct, setCorrect, incorrect, setIncorrect}}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/HomePage" element={<HomePage/>}/>
                    <Route path="/AboutPage" element={ <AboutPage/> }/>
                    <Route path="/Question1" element={<Question1/>}/>
                    <Route path="/Question2" element={<Question2/>}/>
                    <Route path="/Question3" element={<Question3/>}/>
                    <Route path="/Question4" element={<Question4/>}/>
                    <Route path="/Question5" element={<Question5/>}/>
                    <Route path="/Question6" element={<Question6/>}/>
                    <Route path="/Question7" element={<Question7/>}/>
                    <Route path="/Results" element={<Results/>}/>
                </Routes>
            </Counter.Provider>
        </div>
        </BrowserRouter>
    )
}

export default MainPage