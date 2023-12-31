import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"

const Navbar = () => {

    const navlinks = <>
        <button className=" px-7 rounded-full mt-3 w-full py-3 hover:border-[#12D1E5] border relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
            {/* purple box */}
            <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full font-medium text-[#050d11] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                <li className="text-white"><a href="#Contact">Contact us</a></li>
            </span>
        </button>
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
                        <h1 className="text-white text-2xl font-rubik">safayet.com</h1>
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