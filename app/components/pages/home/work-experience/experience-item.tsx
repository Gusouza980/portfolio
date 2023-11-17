import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { WorkExperience } from "@/app/types/page-info"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import Image from "next/image"

type ExperienceItemProps = {
    experience: WorkExperience
}

export const ExperienceItem = ({ experience } : ExperienceItemProps) => {
    const startDate = new Date(experience.startDate)
    const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
    const formattedEndDate = experience.endDate ? format(new Date(experience.endDate), 'MMM yyyy', { locale: ptBR }) : 'o momento'
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image src={experience.companyLogo.url} alt={experience.companyName} width={40} height={40} className="rounded-full" />
                </div>
                <div className="h-full w-[1px] bg-gray-800">

                </div>
            </div>
            <div>
                <div className="flex flex-col gap-2 text-sm sm:text-base">
                    <a href={experience.companyUrl} className="text-gray-500 hover:text-emerald-500 transition-colors" target="_blank">@ {experience.companyName}</a>
                    <h4 className="text-gray-300">{experience.role}</h4>
                    <span className="text-gray-500">
                        {formattedStartDate} até {formattedEndDate}
                    </span>
                    <p className="text-gray-400">
                        <RichText content={experience.description.raw} />
                    </p>
                </div>
                <p className="text-gray-400 text-sm mb-3 mt-6">
                    Competências
                </p>
                <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                    {experience.technologies.map((tech) => (
                        <TechBadge key={tech.name} name={tech.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}