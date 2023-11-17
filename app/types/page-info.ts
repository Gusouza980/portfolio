import { KnownTech, Project } from "./projects"
import type { RichTextContent } from "@graphcms/rich-text-types"

export type HomePageInfo = {
    introduction: {
        raw: RichTextContent
    }
    technologies: KnownTech[]
    socials: {
        url: string
        iconSvg: string
    }[]
    knowntechs: KnownTech[]
    highlightedProjects: Project[]
    workExperiences: WorkExperience[]
}

export type HomePageData = {
    page: HomePageInfo
}

export type ProjectsPageStaticData = {
    projects: {
        slug: string
    }[]
}

export type WorkExperience = {
    companyName: string
    companyUrl: string
    companyLogo: {
        url: string
    }
    role: string
    technologies: KnownTech[]
    startDate: string
    endDate: string
    description: {
        raw: RichTextContent
    }

}