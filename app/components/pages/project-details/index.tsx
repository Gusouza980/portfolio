import { TbBrandGithub } from "react-icons/tb"
import { Button } from "../../button"
import { SectionTitle } from "../../section-title"
import { TechBadge } from "../../tech-badge"
import { FiGlobe } from "react-icons/fi"
import { Link } from "../../link"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Project } from "@/app/types/projects"
import { RichText } from "../../rich-text"

type ProjectDetailsProps = {
    project: Project
}

export const ProjectDetails = ({ project } : ProjectDetailsProps) => {
    return (
        <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 pt-24 px-6 overflow-hidden">
            <div 
                className="absolute inset-0 z-[-1]"
                style={{ 
                    background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageBanner.url}) no-repeat center/cover`, 
                 }}
            />
            <SectionTitle subtitle="projetos" title={project.title} className="text-center items-center [&>h3]:text-4xl" />
            <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
                <RichText content={project.description.raw} />
            </p>
            <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
                { project.technologies.map((tech) => (
                    <TechBadge key={tech.name} name={tech.name} />
                ))} 
            </div>
            <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
                <a href={project.githubUrl} target="_blank">
                    <Button className="min-w-[180px]">
                        <TbBrandGithub size={20} /> Repositório
                    </Button>
                </a>
                <a href={project.linkProjeto} target="_blank">
                    <Button className="min-w-[180px]">
                        <FiGlobe size={20} /> Projeto Online
                    </Button>
                </a>
            </div>
            <Link href="/projects">
                <HiArrowNarrowLeft size={20} /> Voltar aos projetos
            </Link>
        </section>
    )
}