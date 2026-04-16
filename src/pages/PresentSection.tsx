import { ExalnaProject } from "../constants/images"

const PresentSection = () => {



    return (
        <section className="flex items-center justify-center flex-col gap-12 mt-12" id="project-section">



            <div className="flex flex-col w-[90vw] mt-24">
                <div className="flex flex-col-reverse gap-8">
                    <h2 className="text-5xl font-medium mb-4">Recent already projects</h2>
                    <p className="text-sm font-medium text-gray-700">We move forward with a focus on innovation and excellence.</p>
                </div>

                <div className="flex flex-col mt-24">
                    <div className="flex flex-row gap-12 text-start bg-lime-800 p-12">
                        <img src={ExalnaProject} alt="Exalna Project" className="w-[60%]" />
                        <div className="flex flex-col w-full gap-8 bg-lime-800 p-8">
                            <h3 className="text-4xl font-bold">
                                Exalna Project
                            </h3>
                            <p className="font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam excepturi maiores cumque vitae perspiciatis qui dolorem vel minus expedita.
                            </p>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PresentSection;