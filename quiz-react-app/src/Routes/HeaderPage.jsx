import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import RouteStyling from "./RouteStyling.css"
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Question4 from "./Question4"
import Question5 from "./Question5"
import Question6 from "./Question6"
import Question7 from "./Question7"
import { Link } from "react-router-dom"

const HeaderPage = () => {
    return (
        <div>
            <p className="list-para display-5" nav>
                <hr/>
                <Link to="/HomePage" > <button className="btn btn-primary btn-sm"> HOME </button> </Link>
                <Link to="/Question1" > <button className="btn btn-light btn-sm"> Q1 </button> </Link>
                <Link to="/Question2" > <button className="btn btn-light btn-sm"> Q2 </button> </Link>
                <Link to="/Question3" > <button className="btn btn-light btn-sm"> Q3 </button> </Link>
                <Link to="/Question4" > <button className="btn btn-light btn-sm"> Q4 </button> </Link>
                <Link to="/Question5" > <button className="btn btn-light btn-sm"> Q5 </button> </Link>
                <Link to="/Question6" > <button className="btn btn-light btn-sm"> Q6 </button> </Link>
                <Link to="/Question7" > <button className="btn btn-light btn-sm"> Q7 </button> </Link>
                <Link to="/AboutPage" > <button className="btn btn-primary btn-sm"> ABOUT US </button> </Link>
                <br></br>
                <br></br>
                <Link to="/Results" > <button className="btn btn-danger btn-sm">RESULTS</button> </Link>
                <hr/>

             </p>
        </div>
    )
}

export default HeaderPage
