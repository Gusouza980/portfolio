import { Project } from "@/app/types/projects"
import Image from "next/image"

type ProjectCardProps = {
    project: Project
}

const pluck = (arr:Array<any>, key:any) => arr.map(i => i[key]);

export const ProjectCard = ({ project } : ProjectCardProps) => {
    return (
        <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 transition duration-200 opacity-70 hover:opacity-100 group">
            <div className="w-full h-48 overflow-hidden">
                <Image src={ project.thumbnail.url } width={380} height={200} alt={project.title} unoptimized className="w-full h-full object-cover group-hover:scale-110 transition duration-500"/>
            </div>
            <div className="flex-1 flex flex-col p-8">
                <strong className="font-semibold text-gray-50/90 group-hover:text-emerald-500 transition duration-200">{project.title}</strong>
                <p className="mt-2 text-gray-400 line-clamp-4">
                    {project.shortDescription}
                </p>
                <span className="text-gray-300 block mt-auto text-sm font-semibold truncate">{pluck(project.technologies, 'name').join(", ")}</span>
            </div>
        </div>
    )
}