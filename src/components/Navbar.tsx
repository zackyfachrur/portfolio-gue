// import BrandLogo from "/public/assets/images/brand-logo.png";

const Navbar = () => {
    return(
        <nav className="w-full h-16 flex items-center justify-center pt-8 z-99">
            <div className="w-[90vw]  flex items-center justify-between">
                <div className="flex items-center justify-center">
                    <h2 className="italianno text-2xl font-bold italic"><span className="text-gray-300">Zacky </span>Fachrur <span className="text-lime-500">.</span></h2>
                </div>

                {
                /* <ul className="flex flex-row space-x-8 text-lg font-medium uppercase">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Projects</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Resume</li>
                </ul> */
                }

                <div className="flex items-center justify-center gap-4">
                    <button className="border-2 border-gray-300 font-medium p-4 flex gap-2 items-center rounded-full">Let's Talk <i className="ri-chat-3-line"></i></button>
                    <button className="border-2 border-gray-300 p-2 w-14 h-14 rounded-full cursor-pointer hover:scale-95">
                        <i className="ri-menu-4-line text-xl font-bold"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;