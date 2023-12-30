

const MyProjectTwo = () => {
    return (
        <div className="pt-12">
            <div className="bg-[#121619] md:p-12 p-4 rounded-[20px] md:mx-20 mx-8 items-center md:grid-cols-2 grid">
                <div>
                    <h1 className="font-rubik text-[#ffffffcc] text-3xl">SK BUILDERS</h1>
                    <p className="font-rubik py-7 text-[#ffffff80] text-[17px]">This is a Real-Estate website build using the MERN (mongoDB,  React.js, Node.js) stack.</p>
                    <p className="font-inter text-[#ffffff80] text-[17px]">Technologies I have used</p>
                    <div className="pt-2">
                        <div className="flex pb-2 gap-2">
                            <img className="w-[140px] h-11" src="https://i.ibb.co/D7f6vF3/Group-1000015961-1.png" alt="" />
                            <img className="w-[140px] h-11" src="https://i.ibb.co/C2zLX3t/Group-1000015963-1.png" alt="" />
                            <img className="w-[140px] h-11" src="https://i.ibb.co/Jy299Rc/Group-1000015953-1.png" alt="" />
                        </div>
                        <div className="flex gap-3 pt-10">
                            <a href="https://github.com/SafayetAhme/Real-estate-website" target="_blank">
                                <button className=" px-7 rounded-full mt-3 w-full py-3 bg-[#ffffff10]  relative inline-flex items-center justify-start overflow-hidden transition-all  hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Client
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/SafayetAhme/Realestate-server-site" target="_blank">
                                <button className=" px-7 rounded-full mt-3 w-full py-3 bg-[#ffffff10]  relative inline-flex items-center justify-start overflow-hidden transition-all  hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Server
                                    </span>
                                </button>
                            </a>
                            <a href="https://real-estate-website-c6739.web.app/" target="_blank">
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
                    <img src="https://i.ibb.co/ZGVx9pZ/Frame-1000015889-1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MyProjectTwo