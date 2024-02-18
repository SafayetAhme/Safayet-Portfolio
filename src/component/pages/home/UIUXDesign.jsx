import figma from "../../../../public/image/figma.png"
import behencelogo from "../../../../public/image/behencelogo.png"
import behenceimage from "../../../../public/image/behenceimage.png"
import header from "../../../../public/image/header.png"

const UIUXDesign = () => {
    return (
        <div id="Design" className="hero container mx-auto pt-[0px]" style={{ backgroundImage: `url(${header})` }}>
            <div>
                <h1 className="text-white text-center font-rubik text-4xl pb-12 pt-32">I am also Ui UX designer</h1>
                <div className="md:grid-cols-2 grid px-20 gap-8">
                    <div className="bg-[#181E22] pt-[60px] px-10 rounded-[18px] text-center">
                        <a href="https://www.figma.com/file/mcxflcxZNBNVvIFa5AKmpu/My-All-Web-Design?type=design&node-id=0-1&mode=design&t=9S8FsZZtRWJI3aki-0" target="_blank">
                            <button>
                                <img className="" src={figma} alt="" />
                            </button>
                        </a>
                        <p className="font-rubik py-6 text-white lg:text-2xl md:text-2xl sm:text-2xl text-sm">I have been making beautiful <br /> designs with Figma for easy-to-use <br /> websites for three years.</p>
                        <a href="https://www.behance.net/safayetahmed" target="_blank">
                            <button className="w-70 lg:mb-0 mb-6">
                                <img className="w-full" src={behencelogo} alt="" />
                            </button>
                        </a>
                    </div>
                    <div>
                        <img src={behenceimage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UIUXDesign