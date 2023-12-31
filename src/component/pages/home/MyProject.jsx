import MyProjectTherd from "./MyProjectTherd"
import MyProjectTwo from "./MyProjectTwo"

const MyProject = () => {
    return (
        <div className="bg-white container mx-auto px-24">
            <div>
                <h1 className="text-[#051418] text-center font-rubik text-4xl font-bold pt-14 pb-8">My Projects</h1>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                            <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src="https://i.ibb.co/cQ95nmW/Frame-1000015890-3.png" alt="" />
                        </div>
                        <div className="pt-6">
                            <h1 className="font-rubik text-[#051418] font-bold text-2xl">Tour Place</h1>
                            <p className="font-rubik pb-3 pt-2 text-[#051418] text-[15px]">This is a Full Stack Travel website built using the  MERN (mongoDB, Express.js, React.js, Node.js)  stack. The Platform provides a secure authentication system, payment system and Admin Dashboard</p>
                            <p className="font-inter text-[#040c0f] font-bold  text-[17px]">Technologies I have used</p>
                            <div className="flex pt-1 gap-1">
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">javaScript</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">React.js</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">Node.js</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">MongoDB</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">Express.js</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">Firebase</h1>
                            </div>
                            <div className="flex items-center gap-2 pt-3">

                                <a href="https://travel-website-4d715.web.app/" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2 bg-[#20A1C9] relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Live Demo
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/SafayetAhme/Travel-web-client-site" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2 relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Client
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/SafayetAhme/Travel-web-server-site" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2 relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Server
                                        </span>
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                            <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src="https://i.ibb.co/pd6S8BC/Frame-1000015889-2.png" alt="" />
                        </div>
                        <div className="pt-6">
                            <h1 className="font-rubik text-[#051418] font-bold text-2xl">SK BUILDERS</h1>
                            <p className="font-rubik pb-3 pt-2 text-[#051418] text-[17px]">This is a Real-Estate website build using the MERN (mongoDB, React.js, Node.js) stack</p>
                            <p className="font-inter text-[#040c0f] font-bold  text-[17px]">Technologies I have used</p>
                            <div className="flex pt-1 gap-1">
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">javaScript</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">React.js</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">MongoDB</h1>
                            </div>
                            <div className="flex items-center gap-2 pt-4">

                                <a href="https://real-estate-website-c6739.web.app/" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2 bg-[#20A1C9] relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Live Demo
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/SafayetAhme/Real-estate-website" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Client
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/SafayetAhme/Realestate-server-site" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Server
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid pb-10 -mt-5 md:grid-cols-2 gap-10">
                    <div>
                        <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                            <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src="https://i.ibb.co/jLsWHn3/Frame-1000015889-3.png" alt="" />
                        </div>
                        <div className="pt-6">
                            <h1 className="font-rubik text-[#051418] font-bold text-2xl">Education</h1>
                            <p className="font-rubik pb-3 pt-2 text-[#051418] text-[17px]">This is a Full Stack Travel website built using the  MERN (mongoDB, Express.js, React.js, Node.js)  stack. The Platform provides a secure authentication system, payment system and Admin Dashboard and User Dashboard</p>
                            <p className="font-inter text-[#040c0f] font-bold  text-[17px]">Technologies I have used</p>
                            <div className="flex pt-1 gap-1">
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">javaScript</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">React.js</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">Node.js</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">MongoDB</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">Express.js</h1>
                                <h1 className="border py-1 px-3 text-[13px] rounded-full font-rubik text-[#050d11] font-medium">Firebase</h1>
                            </div>
                            <div className="flex items-center gap-2 pt-4">
                                <a href="https://e-learning-website-b93d1.web.app/" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2 bg-[#20A1C9] relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Live Demo
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/SafayetAhme/Education-web-Client" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Client
                                        </span>
                                    </button>
                                </a>
                                <a href="https://github.com/SafayetAhme/Education-web-Server" target="_blank">
                                    <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                        {/* purple box */}
                                        <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                        <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                            Server
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProject