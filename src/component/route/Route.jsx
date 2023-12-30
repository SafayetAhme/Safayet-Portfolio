import { Outlet } from "react-router-dom"
import Navbar from "../pages/navbar/Navbar"
import Footer from "../pages/footer/Footer"


const Route = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Route