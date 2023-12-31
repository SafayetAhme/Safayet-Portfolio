import resum from "../../../../public/image/resum.pdf";
import video from "../../../../public/video/video.mp4"

const Hero = () => {
    return (
        <div id="hero">
            <div className="hero md:-mt-[90px] pt-16 md:pt-[180px] pb-[110px]" style={{ backgroundImage: 'url(https://i.ibb.co/2vSSHdW/Group-1000015945.png)' }}>
                <div className="justify-center container md:flex px-4 gap-16 md:px-10 items-start">
                    <div className="pr-[80px] md:pb-0 pb-12">
                        <h1 className="text-[60px] font-light font-rubik leading-[78px] text-white"> <samp className="font-bold font-rubik">Hello!</samp> This is <br /> Safayet Ahmed</h1>
                        <p className="text-[26px] pt-4 font-rubik text-[#ffffffd8]">Front end developer with design experience <br /> with <span className="text-[#20A1C9]">3 years</span> experience</p>
                        <div className="flex pt-20 gap-4">
                            <div>
                                <a href={resum} download>
                                    <button className="btn rounded-full border" type="">
                                        <strong className="font-rubik">
                                            <button className=" flex gap-2 items-center text-white font-medium text-sm">Resume <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 14.5L12 4.5M12 14.5C11.2998 14.5 9.99153 12.5057 9.5 12M12 14.5C12.7002 14.5 14.0085 12.5057 14.5 12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M20 16.5C20 18.982 19.482 19.5 17 19.5H7C4.518 19.5 4 18.982 4 16.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            </button>
                                        </strong>
                                        <div id="container-stars">
                                            <div id="stars"></div>
                                        </div>
                                        <div id="glow">
                                            <div className="circle"></div>
                                            <div className="circle"></div>
                                        </div>
                                    </button>
                                </a>
                            </div>
                            <a href="https://mail.google.com/mail/u/0/#sent" target="_blank">
                                <button class="text-white border border-[#ffffff4a] py-3 rounded-full px-8">asafayet21@gmail.com</button>
                            </a>
                        </div>
                    </div>
                    <div className="w-[400px] h-[100px]">
                        <video src={video} className="rounded-xl" width="full" height="900px" autoPlay muted loop ></video>
                        {/* <img src="https://i.ibb.co/dMBWj8T/Rectangle-10-1.png" alt="" /> */}
                    </div>
                </div>
            </div>
            {/*  */}
            <div>
                {/* <Marquee className="" pauseOnHover={true} speed={100}>
                    <h1 className="text-4xl font-rubik text-[#ffffff58] pr-12"> <span className="text-white font-bold">1+</span>YEARS OF EXPERIENCE</h1>
                    <h1 className="text-4xl font-rubik text-[#ffffff58] pr-12"> <span className="text-white font-bold">41+</span>PROJECTS COMPLETED</h1>
                    <h1 className="text-4xl font-rubik text-[#ffffff58]  pr-12"> <span className="text-white font-bold">81%</span>POSITIVE FEEDBACK</h1>
                </Marquee> */}
            </div>
        </div>
    )
}

export default Hero