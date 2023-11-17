import { CmsIcon } from "@/app/components/cms-icon"
import { KnownTech as IKnownTech } from "@/app/types/projects"
import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"

type KnownTechProps = {
    tech: IKnownTech
}
export const KnownTech = ({tech} : KnownTechProps) => {
    const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'pt-BR').replace('há ', '')
    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-emerald-500 hover:bg-gray-600/30 transition duration-200">
            <div className="flex items-center justify-between">
                <p className="font-medium">{tech.name}</p>
                <CmsIcon icon={tech.iconSvg} />
            </div>
            <small className="mt-2">{relativeTime} de experiência</small>
        </div>
    )
}