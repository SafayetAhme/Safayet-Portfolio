import MyProjectTherd from "./MyProjectTherd"
import MyProjectTwo from "./MyProjectTwo"

const MyProject = () => {
    return (
        <div id="Project" className="pt-10 container mx-auto">
            <h1 className="text-white text-center font-rubik text-4xl pb-8">My Projects</h1>
            <div className=" mt-[20px]" style={{ backgroundImage: 'url(https://i.ibb.co/GdJDtXc/image-802.png)' }}>
                <div className="bg-[#121619] md:p-12 p-4 rounded-[20px] md:mx-20 mx-8 items-center md:grid-cols-2 grid">
                    <div>
                        <h1 className="font-rubik text-[#ffffffcc] text-3xl">Tour Place</h1>
                        <p className="font-rubik py-7 text-[#ffffff80] text-[17px]">This is a Full Stack Travel website built using the <br /> MERN (mongoDB, Express.js, React.js, Node.js) <br /> stack. The Platform provides a secure authentication system, payment system and Admin Dashboard</p>
                        <p className="font-inter text-[#ffffff80] text-[17px]">Technologies I have used</p>
                        <div className="pt-2">
                            <div className="flex pb-2 gap-2">
                                <img className="w-[140px] h-11" src="https://i.ibb.co/D7f6vF3/Group-1000015961-1.png" alt="" />
                                <img className="w-[140px] h-11" src="https://i.ibb.co/C2zLX3t/Group-1000015963-1.png" alt="" />
                                <img className="w-[140px] h-11" src="https://i.ibb.co/mbm79SL/Group-1000015971-1.png" alt="" />
                            </div>
                            <div className="flex gap-2">
                                <img className="w-[140px] h-11" src="https://i.ibb.co/Jy299Rc/Group-1000015953-1.png" alt="" />
                                <img className="w-[140px] h-11" src="https://i.ibb.co/M19NXw1/Group-1000015967-1.png" alt="" />
                                <img className="w-[140px] h-11" src="https://i.ibb.co/7QXRbyJ/Group-1000015969-1.png" alt="" />
                            </div>
                            <div className="flex items-center gap-3 pt-10">
                                <a href="https://github.com/SafayetAhme/Travel-web-client-site" target="_blank">
                                   <button className=" px-7 rounded-full mt-3 w-full py-3 bg-[#ffffff10] relative inline-flex items-center justify-start overflow-hidden transition-all  hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Client
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/SafayetAhme/Travel-web-server-site" target="_blank">
                                   <button className=" px-7 rounded-full mt-3 w-full py-3 bg-[#ffffff10]  relative inline-flex items-center justify-start overflow-hidden transition-all  hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Server
                                        </span>
                                    </button>
                                </a>
                                <a href="https://travel-website-4d715.web.app/" target="_blank">
                                    <button className=" px-7 rounded-full mt-3 w-full py-3 bg-[#20A1C9] relative inline-flex items-center justify-start overflow-hidden transition-all  hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Live Demo
                                        </span>
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/bsfX6Bp/Frame-1000015890-3.png" alt="" />
                    </div>
                </div>
                {/*  */}
                <MyProjectTwo></MyProjectTwo>
                <MyProjectTherd></MyProjectTherd>
            </div>
        </div>
    )
}

export default MyProject