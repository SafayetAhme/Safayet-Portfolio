import imageone from "../../../../public/image/imageone.png"
import imagetwo from "../../../../public/image/imagetwo.png"
import imagethri from "../../../../public/image/imagethri.png"
import imageforth from "../../../../public/image/imageforth.png"


const MyProject = () => {
    return (
        <div className="bg-white container mx-auto lg:px-12 md:px-12 sm:px-12">
            <h1 className="text-[#051418] text-center font-rubik text-4xl font-bold pt-14 pb-8">My Projects</h1>
            {/* fist two card */}
            <div className="grid lg:grid-cols-2 lg:gap-12 items-start">
                {/* fist */}
                <div className="lg:pb-0 pb-10">
                    <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                        <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src={imageone} alt="" />
                    </div>
                    <div className="pt-6">
                        <h1 className="font-rubik text-[#051418] font-bold text-2xl">Real-estate Web</h1>
                        <p className=" pb-5 font-medium pt-2 text-[#5a5a5a] text-[15px]">This is a full stack Real estate website built using MERN (mongoDB, Express.js, React.js, Node.js). There is an authentication system, a payment system, and an administration dashboard available on the Platform</p>
                        <p className="font-inter text-[#040c0f] font-bold  text-[17px]">Technologies I have used</p>
                        <div className="lg:flex pt-1 gap-1">
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">React.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Node.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">MongoDB</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Express.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Firebase</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Tailwind CSS</h1>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                            <a href="https://real-estate-web-from-figma.web.app/" target="_blank">
                                <button className=" px-5 rounded-full mt-3 w-full py-2 bg-[#20A1C9] relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Live Demo
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/SafayetAhme/Real-estate-from-figma-client-site" target="_blank">
                                <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Client
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/SafayetAhme/Real-estate-from-figma-server-site" target="_blank">
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

                {/* two */}
                <div className="lg:pb-0 pb-10">
                    <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                        <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src={imagetwo} alt="" />
                    </div>
                    <div className="pt-6">
                        <h1 className="font-rubik text-[#051418] font-bold text-2xl">E-commerce-web</h1>
                        <p className=" pb-5 font-medium pt-2 text-[#5a5a5a] text-[15px]">This is a Full Stack E-commerce website built with the MERN stack (mongoDB, Express.js, React.js, Node.js). A secure authentication system, payment system, and admin dashboard are included in the Platform Dashboard for users. <span className="font-bold">(This is a team project).</span>  Which is completed by 2 people </p>
                        <p className="font-inter text-[#040c0f] font-bold  text-[17px]">Technologies I have used</p>
                        <div className="lg:flex pt-1 gap-1">
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">React.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Node.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">MongoDB</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Express.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Firebase</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Tailwind CSS</h1>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                            <a href="https://e-commers-webside.web.app/?fbclid=IwAR0-6nnTk7WUlNYY-7kUbCyTPNLS__qj7ubDbsRxI4LZnEl2Stjd_tAg3J8" target="_blank">
                                <button className=" px-5 rounded-full mt-3 w-full py-2 bg-[#20A1C9] relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Live Demo
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/Sudiptacoding/E-commerce-shop-client-main" target="_blank">
                                <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Client
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/Sudiptacoding/E-commerce-shop-server-main" target="_blank">
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

            {/* fist two card */}
            <div className="grid lg:grid-cols-2 lg:gap-12 lg:pt-16 lg:pb-20 items-start">
                {/* fist */}
                <div className="lg:pb-0 pb-10">
                    <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                        <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src={imagethri} alt="" />
                    </div>
                    <div className="pt-6">
                        <h1 className="font-rubik text-[#051418] font-bold text-2xl">E-commerce Online-store</h1>
                        <p className=" pb-5 font-medium pt-2 text-[#5a5a5a] text-[15px]">This is a Full Stack E-commerce website built with the MERN stack (mongoDB, Express.js, React.js, Node.js). A secure authentication system, payment system, and admin dashboard are included in the Platform Dashboard for users. <span className="font-bold">(This is a team project).</span>  Which is completed by 2 people </p>
                        <p className="font-inter text-[#040c0f] font-bold  text-[17px]">Technologies I have used</p>
                        <div className="lg:flex pt-1 gap-1">
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">React.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Node.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Mongoose</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Express.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Netlify</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Tailwind CSS</h1>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
                            <a href="https://onlineshop001.netlify.app/?fbclid=IwAR0F8j9RyIvj94uOq4wr6TlWCaLvGc_Pz-xh3MbPWA7JY77vUMvPerB0v5c" target="_blank">
                                <button className=" px-5 rounded-full mt-3 w-full py-2 bg-[#20A1C9] relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Live Demo
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/Shihab8902/fit-india/tree/main/client" target="_blank">
                                <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Client
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/Shihab8902/fit-india/tree/main/server" target="_blank">
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

                {/* two */}
                <div className="lg:pb-0 pb-10">
                    <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                        <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src={imageforth} alt="" />
                    </div>
                    <div className="pt-6">
                        <h1 className="font-rubik text-[#051418] font-bold text-2xl">Tour Place</h1>
                        <p className=" pb-5 font-medium pt-2 text-[#5a5a5a] text-[15px]">This is a Full Stack Travel website built using the MERN (mongoDB, Express.js, React.js, Node.js) stack. The Platform provides a secure authentication system, payment system and Admin Dashboard</p>
                        <p className="font-inter text-[#040c0f] font-bold  text-[17px]">Technologies I have used</p>
                        <div className="lg:flex pt-1 gap-1">
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">React.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Node.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">MongoDB</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Express.js</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Firebase</h1>
                            <h1 className="border py-1 px-3 text-[13px] rounded-full text-[#050d11] font-medium">Tailwind CSS</h1>
                        </div>
                        <div className="flex items-center gap-2 pt-4">
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
                                <button className=" px-5 rounded-full mt-3 w-full py-2  relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-[#050d11] underline transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Client
                                    </span>
                                </button>
                            </a>
                            <a href="https://github.com/SafayetAhme/Travel-web-server-site" target="_blank">
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
    )
}

export default MyProject