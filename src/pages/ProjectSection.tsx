import ProjectContent from "../json/ProjectContent.json";
import type { ProjectType } from "../types/declare";

const ProjectSection = () => {
  const Project = ProjectContent.projects.map((project) => {
    return {
      title: project["project-title"],
      type: project["project-type"],
      role: project["project-role"],
      year: Number(project["project-year"]),
      category: project["project-category"],
      thumbnail: project["project-thumbnail"]
    }
  });


  return (

    Project.map((project: ProjectType, index) => (
      <section
        className="flex flex-col justify-start items-center h-full gap-12 pt-24 bg-black w-full text-white"
        id="project-section"
      >
        <div className="w-[90vw] text-start">
          <span className="self-start text-xl flex font-semibold mb-12">0{index + 1} <span className="text-gray-400">/ 05</span></span>
          <div className="flex flex-row">
            <div className="w-full flex flex-col gap-32">
              <h2 className="text-5xl font-medium mt-4">{project.title}</h2>
              <table className="text-start w-[70%]">
                <thead>
                  <tr className=" text-gray-400">
                    <th className="text-start">Project</th>
                    <th className="text-start">Role</th>
                    <th className="text-start">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="gap-8 font-medium">
                    <td className="text-start">{project.type}</td>
                    <td className="text-start">{project.role}</td>
                    <td className="text-start">{project.year}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full self-end text-end flex flex-col gap-4">
              <ul className="flex flex-col gap-4 w-full self-end justify-end items-end rounded-lg outline-none">
                {project.category.map((category) => (
                  <li className="border w-fit px-4 py-2 rounded-full">{category}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[90vw] flex flex-col gap-8">
          <img src={project.thumbnail[0]} alt="Project Restaurant who can manages all operations" className="rounded-2xl" />
          <div className="grid grid-cols-3 gap-12">
            {project.thumbnail.slice(1).map((thumbnail) => (
              <img src={thumbnail} alt="Project Restaurant who can manages all operations" className="rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    ))

  );


};

export default ProjectSection;
