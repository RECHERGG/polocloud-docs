import Link from "@docusaurus/Link"
import clsx from "clsx"
import "../css/projects.css"

const projects: Project[] = [
    {
        title: "polocloud-v2",
        description: "The simplest and easiest way to create a minecraft server network",
        link: "https://github.com/thePolocloud/polocloud-v2",
        href: "/docs/polocloud-v2"
    },
    {
        title: "polocloud-dashboard",
        description: "A simple dashboard component for all polocloud-v2 instances",
        link: "https://github.com/thePolocloud/polocloud-dashboard",
        href: "/docs/polocloud-dashboard"
    },
    {
        title: "polocloud-metadata",
        description: "A collection for all public polocloud-v2 platforms",
        link: "https://github.com/thePolocloud/polocloud-metadata",
        href: "/docs/polocloud-metadata"
    }
]

function ProjectCard(project: Project) {
    return (
        <div className="projectCard">
            <div className="projectBody">
                <div className="projectHeader">
                    <Link className={clsx("projectGitHub")} to={project.link}>
                        {project.title}
                    </Link>
                </div>
                <p>{project.description}</p>
            </div>
            <div className="buttonContainer">
                <Link className="button button--primary" to={project.href}>Docs</Link>
            </div>
        </div>
    )
}

export default function Projects() {
    return (
        <section className="projects">
            <div className="projectsContainer">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    )
}

interface Project {
    title: string,
    description: string,
    link: string,
    href: string
}