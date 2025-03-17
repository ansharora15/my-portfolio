function Projects() {
    const projects = [
      {
        title: "E-Commerce Site",
        description: "A React-based e-commerce site with a shopping cart and payment integration.",
        technologies: ["React", "Bootstrap", "Node.js"],
      },
      {
        title: "JavaScript Game",
        description: "A simple game built using vanilla JavaScript and HTML5 Canvas.",
        technologies: ["JavaScript", "HTML5", "CSS"],
      },
    ];
  
    return (
      <div className="container mt-5">
        <h1>Projects</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                  <button className="btn btn-primary" disabled>
                    View Details (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;