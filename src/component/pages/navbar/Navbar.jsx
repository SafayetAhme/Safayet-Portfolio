import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"

const Navbar = () => {

    const navlinks = <>
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#aboutme">About Me</a></li>
        <li><a href="#Project">Project</a></li>
        <li><a href="#Design">Design</a></li>
        <li><a href="#Contact">Contact</a></li>
    </>

    return (
        <div className="md:px-10 pt-3">
            <div className="justify-between items-center flex ">
                <div className="navbar">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div>
                        <img className="w-[180px]" src="https://i.ibb.co/C7n7gg1/Group-1000015942.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        <li className="flex text-white font-rubik gap-8 mr-6">
                            {navlinks}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar