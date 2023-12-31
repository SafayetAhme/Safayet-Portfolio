

const AboutMe = () => {
    return (
        <div id="aboutme" className="py-16 bg-white container mx-auto md:px-36">
            <h1 className="text-[#051418] text-center font-rubik font-bold text-4xl pb-8"></h1>
            <div className="md:flex gap-12">
                <div class="relative  overflow-hidden bg-cover bg-no-repeat">
                <img className="w-[1890px]  transition duration-300 ease-in-out hover:scale-110" src="https://i.ibb.co/82jB7RS/Rectangle-12.png" alt="" />
                </div>
                <div>
                    <h1 className="font-rubik text-[#051418] font-bold text-2xl pt-2 pb-4">I am Front-End Web Developer</h1>
                    <p className="text-[18px] font-rubik text-[#333536]">As a Junior Front-End Developer. I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic. engaging interface through writing clean and  optimized code and otilizing cutting-edge development tools and techniques. I am also a designer I have 3+ years experience in design.</p>
                    <p className="text-[#051418] py-3 font-rubik">asafayet21@gmail.com</p>
                    <p className="text-[#051418] font-rubik">+8801329181278</p>
                    <div className="flex gap-8 pt-5">
                        <a href="https://www.facebook.com/safayet.safayetahmed.1/" target="_blank">
                            <img className="w-[44px] " src="https://i.ibb.co/bPv4STq/Group-1000016025-1.png" alt="" />
                        </a>
                        <a href="https://www.instagram.com/asafayet21/" target="_blank">
                            <img className="w-[44px]" src="https://i.ibb.co/G58BG7F/Group-1000016023.png" alt="" />
                        </a>
                        <a href="https://twitter.com/asafayet21" target="_blank">
                            <buttonn>
                                <img className="w-[44px]" src="https://i.ibb.co/K7PYNHd/Group-1000016022.png" alt="" />
                            </buttonn>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe