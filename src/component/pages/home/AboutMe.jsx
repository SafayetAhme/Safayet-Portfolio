

const AboutMe = () => {
    return (
        <div id="aboutme" className="py-16 container mx-auto  px-8 md:px-36">
            <h1 className="text-white text-center font-rubik text-4xl pb-8">Who Am I</h1>
            <div className="md:flex gap-12">
                <img className="w-[320px] h-[350px] " src="https://i.ibb.co/hmY45Sn/Rectangle-12-1.png" alt="" />
                <div>
                    <h1 className="font-rubik text-white text-2xl pt-2 pb-4">I am Front-End Web Developer</h1>
                    <p className="text-[20px] font-rubik text-[#ffffff98]">As a Junior Front-End Developer. I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic. engaging interface through writing clean and  optimized code and otilizing cutting-edge development tools and techniques. I am also a designer I have 3+ years experience in design.</p>
                    <p className="text-[#ffffff98] py-3 font-rubik">asafayet21@gmail.com</p>
                    <p className="text-[#ffffff98] font-rubik">+8801329181278</p>
                    <div className="flex gap-8 pt-5">
                        <a href="https://www.facebook.com/safayet.safayetahmed.1/" target="_blank">
                            <img className="w-[44px]" src="https://i.ibb.co/vVGr4Jr/Group-1000015947.png" alt="" />
                        </a>
                        <a href="https://www.instagram.com/asafayet21/" target="_blank">
                            <img className="w-[44px]" src="https://i.ibb.co/vsMXS7B/Group-1000015950.png" alt="" />
                        </a>
                        <a href="https://twitter.com/asafayet21" target="_blank">
                            <buttonn>
                                <img className="w-[44px]" src="https://i.ibb.co/YkR09HX/Group-1000015951.png" alt="" />
                            </buttonn>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe