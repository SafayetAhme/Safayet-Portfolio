import safayet from "../../../../public/image/safayet.pdf";
import video from "../../../../public/video/video.mp4";
import header from "../../../../public/image/bg.png"
import Marquee from "react-fast-marquee";
import skill from "../../../../public/image/skills.png"
import safayetimage from "../../../../public/image/safayet.png"
import twitter from "../../../../public/image/twitter.png"
import instagram from "../../../../public/image/instagram.png"
import facebook from "../../../../public/image/facebook.png"




const Hero = () => {
    return (
        <div>
            <div className="hero lg:-mt-[90px] pt-16 lg:pt-[180px] lg:pb-[110px]" style={{ backgroundImage: `url(${header})` }}>
                <div className="justify-center container lg:flex px-4 gap-16 md:px-10 items-start">
                    <div className="lg:pr-[80px] md:pb-0 pb-12">
                        <h1 className="text-[60px] font-light font-rubik leading-[78px] text-white"> <samp className="font-bold font-rubik">Hello!</samp> This is <br /> Safayet Ahmed</h1>
                        <p className="lg:text-[26px] md:text-[26px] sm:text-[26px] text-[20px] pt-4 text-[#ffffffd8]">Front end developer who also know design <br /> with <span className="text-[#20A1C9]">4 years</span> experience</p>
                        <div className=" lg:pt-16 ms:pt-16 md:pt-16 pt-10 gap-4">
                            <div className="flex items-center gap-4  ">
                                <div>
                                    <a href={safayet} download>
                                        <button className=" px-7 rounded-full w-full py-3 hover:border-[#12D1E5] border relative inline-flex items-center justify-start overflow-hidden transition-all hover:bg-white group">
                                            {/* purple box */}
                                            <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff] hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ... absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                            <span className="w-full text-white font-medium transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                Resume
                                            </span>
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://mail.google.com/mail/u/0/#sent" target="_blank">
                                        <button class="text-white border border-[#ffffff4a] py-3 rounded-full px-8">asafayet21@gmail.com</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[400px] lg:pt-0 md:pt-12 h-[100px]">
                        <video src={video} className="rounded-xl" width="full" height="900px" autoPlay muted loop ></video>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className=" container mx-auto lg:pb-12 lg:pt-0 md:pt-[599px] pt-[350px] pb-8">
                <div>
                    <Marquee className="pb-10" pauseOnHover={true} speed={100}>
                        <h1 className="text-4xl font-rubik text-[#ffffff61] pr-12"> <span className="text-white font-bold">1+</span>YEARS OF EXPERIENCE</h1>
                        <h1 className="text-4xl font-rubik text-[#ffffff61] pr-12"> <span className="text-white font-bold">41+</span>PROJECTS COMPLETED</h1>
                        <h1 className="text-4xl font-rubik text-[#ffffff61]  pr-12"> <span className="text-white font-bold">81%</span>POSITIVE FEEDBACK</h1>
                    </Marquee>
                </div>

                {/* my skill_ */}
                <div className=" lg:px-24 px-4">
                    <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                        <img className=" transition duration-300 ease-in-out hover:scale-110" id="skills" src={skill} alt="" />
                    </div>
                </div>
            </div>

            {/* about me */}
            <div className="lg:py-16 md:py-16 sm:py-16 bg-white container mx-auto md:px-20 lg:px-36 sm:px-20 px-4" >
                <h1 className="text-[#051418] text-center font-rubik font-bold text-4xl pb-8"></h1>
                <div className="lg:flex gap-12">
                    <div class="relative lg:pb-0 pb-8 overflow-hidden bg-cover bg-no-repeat">
                        <img className="w-[1890px]  transition duration-300 ease-in-out hover:scale-110" src={safayetimage} alt="" />
                    </div>
                    <div>
                        <h1 className="font-rubik text-[#051418] font-bold text-2xl pt-2 pb-4">I am Front-End Web Developer</h1>
                        <p className="text-[18px] font-rubik text-[#333536]">As a Junior Front-End Developer. I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React.js, Tailwind CSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic. engaging interface through writing clean and  optimized code and otilizing cutting-edge development tools and techniques. I am also a designer I have 4+ years experience in design.</p>
                        <p className="text-[#051418] py-3 font-rubik">asafayet21@gmail.com</p>
                        <p className="text-[#051418] font-rubik">+8801329181278</p>
                        <div className="flex gap-8 pt-5">
                            <a href="https://twitter.com/asafayet21" target="_blank">
                                <img className="w-[44px] " src={twitter} alt="" />
                            </a>
                            <a href="https://www.instagram.com/asafayet21/" target="_blank">
                                <img className="w-[44px]" src={instagram} alt="" />
                            </a>
                            <a href="https://www.facebook.com/safayet.safayetahmed.1/ " target="_blank">
                                <buttonn>
                                    <img className="w-[44px]" src={facebook} alt="" />
                                </buttonn>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero