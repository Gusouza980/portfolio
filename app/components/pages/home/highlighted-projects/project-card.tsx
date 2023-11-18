'use client'

import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import { techBadgeAnimation } from "@/app/lib/animations"
import { Project } from "@/app/types/projects"
import { motion } from "framer-motion"
import Image from "next/image"
import { HiArrowNarrowRight } from "react-icons/hi"

type ProjectCardProps = {
    project: Project
}

export const ProjectCard = ({ project } : ProjectCardProps) => {
    const animProps = {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 50
        }
    }
    return (
        <motion.div 
            className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className="lg:min-h-full w-full h-[200px] sm:h-[300px] lg:w-[420px]"
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.5 }}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
                <Image 
                    width={420} 
                    height={304} 
                    alt="Thumbnail do projeto"
                    className="w-full h-full object-cover rounded-lg"
                    src={project.thumbnail.url}/>
            </motion.div>
            <div className="flex-1 lg:py-[18px]">
                <motion.h3 
                    className="flex items-center gap-3 font-medium text-lg text-gray-50"
                    {...animProps}
                    transition={{ duration: 0.7 }}
                >
                    <Image width={20} height={20} alt="Icone de titulo do card de projetos" src="images/icons/project-title-icon.svg" />
                    {project.title}
                </motion.h3>
                <motion.p 
                    className="text-gray-400 my-6"
                    {...animProps}
                    transition={{ duration: 0.2, delay: 0.3 }}
                >
                    {project.shortDescription}
                </motion.p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
                    {project.technologies.map((tech, i) => (
                        <TechBadge 
                            name={tech.name} 
                            { ...techBadgeAnimation }
                            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                            key={tech.name}
                        />
                    ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                    Ver Projeto
                    <HiArrowNarrowRight />
                </Link>
            </div>
        </motion.div>
    )    
}