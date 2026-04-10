// import HandWithPhone from "/assets/images/phone-mockup.png";
import Slider from "../components/reusable/Slider";
import { motion } from "../lib/motion";
import { useYScrollTransformDown } from "../scripts/ScrollTransform";

const HomeSection = () => {

    const { ySection } = useYScrollTransformDown();

    return (
        <>
            <motion.section className="flex items-center justify-center h-[100vh] flex-col gap-12 z-[-99]" id="home-section" initial="offscreen" whileInView="onscreen" style={{ y: ySection }}>
                <div className="flex flex-col w-full h-full justify-between items-center">
                    <div className="flex justify-center items-center flex-col h-full gap-24">
                        <div className="w-[90vw] flex justify-between">
                            <div className="text-start z-99 w-[50vw]">
                                <h1 className="text-8xl font-bold mb-4">Technology isn't an expense—<span className="text-gray-400">it’s an investment in efficiency</span></h1>
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
                    </div>
                    <motion.div className="w-full">
                        <Slider className="w-full rotate-1 text-xl self-end pl-5 bg-purple-300 h-[6vh] flex justify-center items-center" Item={["Software Solutions", "Digitalization", "Custom Software", "E-commerce", "Mobile Apps", "Web Development"]} />
                    </motion.div>
                </div>
            </motion.section>

        </>
    );
}

export default HomeSection;

// const sectionVariants: any = {
//     offscreen: {
//         x: 100,
//         opacity: 0,
//     },
//     onscreen: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             type: "spring",
//             duration: 2,
//         },
//     }
// };
