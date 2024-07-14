import SingleProject from "./SingleProject";
import data from "./projectsData";

const Projects = () => {
  return (
    <main className="px-5  max-w-[800px] mx-auto flex-1">
      <div className="pb-8 pt-20">
        <h2 className="text-3xl font-bold text-gray-700">Projects</h2>
        <p className="py-3 text-gray-600">Here are some of the projects that I have worked on.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((item, i) => (
          <SingleProject key={i} project={item} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
