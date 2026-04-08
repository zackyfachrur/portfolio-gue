const ProjectSection = () => {
  return (
    <section
      className="flex flex-col justify-start items-center h-[70vh] gap-12 pt-24 bg-black w-full text-white"
      id="project-section"
    >

      <div className="w-[90vw] text-start">
        <span className="self-start text-2xl flex">01 <span className="text-gray-400">/ 05</span></span>
        <div className="flex flex-row">
          <div className="w-full flex flex-col gap-32">
            <h2 className="text-5xl font-medium mt-4">Restaurant App - One Platform for Stabilize Restaurant Operations</h2>
            <table>
              <th className="text-left px-3 text-gray-400">Project</th>
              <th className="text-left px-3 text-gray-400">Role</th>
              <th className="text-left px-3 text-gray-400">Date</th>
              <tr >
                <td className="p-3">ParagataApps</td>
                <td className="p-3">Full-Stack Developer</td>
                <td className="p-3">2023</td>
              </tr>
            </table>
          </div>
          <div className="w-full self-end text-end flex flex-col gap-4">
            <ul className="flex flex-col gap-4 w-full self-end justify-end items-end rounded-lg outline-none">
              <li className="border w-fit px-4 py-2 rounded-full">Software</li>
              <li className="border w-fit px-4 py-2 rounded-full">Branding</li>
              <li className="border w-fit px-4 py-2 rounded-full">Solutions</li>
              <li className="border w-fit px-4 py-2 rounded-full">Web Design</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;
