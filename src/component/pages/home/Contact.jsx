

const Contact = () => {
    return (
        <div id="Contact" className="pb-28 container mx-auto">
            <h1 className="text-white text-center font-rubik text-4xl pb-12 pt-28">Contact me_</h1>
            <div className=" block px-10  md:px-60">
                <div className="block">
                    <input type="text" placeholder="Name" className="input bg-[#1216194d] border border-[#ffffff38] w-full" />
                    <input type="email" placeholder="Email" className="input my-3 bg-[#1216194d] border border-[#ffffff38] w-full" />
                    <input type="text" placeholder="Message" className="input bg-[#1216194d] border border-[#ffffff38] w-full" />
                </div>
                <button className=" px-12 rounded-full mt-3  py-3 bg-[#12D1E5]  relative inline-flex items-center justify-start overflow-hidden transition-all  hover:bg-white group">
                    {/* purple box */}
                    <span className="w-0 h-0 rounded bg-[#12D1E5] border-[#12D1E5] text-white hover:bg-[#04e6ff]  hover:border-[#04e6ff] shadow-lg shadow-cyan-500/50 ...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                    <span className=" font-rubik font-medium text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                        Submit
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Contact