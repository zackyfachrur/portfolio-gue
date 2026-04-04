import HandWithPhone from "/assets/images/phone-mockup.png";

const HomeSection = () => {
    return (
        <>
            <section className="flex items-center justify-center h-[90vh] flex-col gap-12" id="home-section">
                <div className="w-[90vw] flex justify-between">
                    <div className="text-start z-99 w-[50vw]">
                        <h1 className="text-8xl font-bold mb-4">Bringing your ideas to life in the <span className="text-gray-400">digital world</span></h1>
                    </div>
                    <ul className="flex justify-end text-gray-600 items-end flex-col gap-6 text-xl font-medium uppercase">
                        <li>Websites Applications</li>
                        <li>Clinic Medical Check-up</li>
                        <li>Learning Management System</li>
                        <li>Custom Software</li>
                    </ul>
                </div>
                <div className="flex flex-row items-center justify-between w-[90vw]">
                    <div className="text-start flex flex-col gap-1">
                        <h2 className="text-black font-bold text-xl">Our Services</h2>
                        <p className="font-medium text-gray-400">May, 25 2025</p>
                    </div>
                    <div className="flex justify-center items-center gap-24 font-medium">
                        <span className="w-100 text-start text-lg">Software Solution: We build a suite of digital solutions tailored to your needs.</span>
                        <ul className="flex gap-4 text-xl">
                            <li className="px-4 py-2 border-2 rounded-full">Software</li>
                            <li className="px-4 py-2 border-2 rounded-full">Digitalization</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="bg-gray-300/30 w-[90vw] self-center rounded-2xl flex flex-row justify-around mb-8">
                <div className="flex justify-end items-end">
                    <img src={HandWithPhone} alt="Hand with phone" className="h-full object-contain self-end rounded-4xl p-4 drop-shadow-2xl" />
                </div>
            </div>
        </>
    );
}

export default HomeSection;