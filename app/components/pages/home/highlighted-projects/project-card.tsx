import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import { Project } from "@/app/types/projects"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project } : ProjectCardProps) => {
    return (
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
            <div className="lg:min-h-full w-full h-[200px] sm:h-[300px] lg:w-[420px]">
                <Image 
                    width={420} 
                    height={304} 
                    alt="Thumbnail do projeto"
                    className="w-full h-full object-cover rounded-lg"
                    src={project.thumbnail.url}/>
            </div>
            <div className="flex-1 lg:py-[18px]">
                <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
                    <Image width={20} height={20} alt="Icone de titulo do card de projetos" src="images/icons/project-title-icon.svg" />
                    {project.title}
                </h3>
                <p className="text-gray-400 my-6">
                    {project.shortDescription}
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.technologies.map((tech) => (
                        <TechBadge name={tech.name} />
                    ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </div>
    )    
}