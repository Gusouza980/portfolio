'use client'

import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { KnownTech as IKnownTech} from "@/app/types/projects"
import { motion } from "framer-motion"

type KnownTechsProps = {
    techs: IKnownTech[]
}


export const KnownTechs = ({ techs }: KnownTechsProps) => {
    return (
        <section className="container py-16">
            <SectionTitle subtitle="competências" title="Conhecimentos" />
            <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
                {techs?.map((tech, i) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.05 * i }}
                    >
                        <KnownTech key={tech.name} tech={tech}/>    
                    </motion.div>
                ))}
            </div>
        </section>
    )
}