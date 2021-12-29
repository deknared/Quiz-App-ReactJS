import CountUp from "react-countup"
import logo_gif from "./logo_gif.gif"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="home" >
            <img src="logo.png" className="img-fluid" alt="quiz main"/>
            <br></br>
            <Link to="/Question1">  <button className="btn-success btn-lg">Start the quiz</button> </Link>  
            <br></br>
            <br></br>
            <Link to="/AboutPage">  <button className="btn btn-danger btn-sm"> About </button> </Link>
            <br></br>
            <br></br>
            <footer class="page-footer font-small blue">

            <div class="footer-copyright text-center py-3"><CountUp start={-875039} end={160527012} duration={2.75}/> users have taken this quiz!
            </div>
            </footer>
        </div>
    )
}

export default HomePage
