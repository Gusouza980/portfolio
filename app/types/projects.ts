import { RichTextContent } from "@graphcms/rich-text-types"

export type KnownTech = {
    iconSvg: string
    name: string
    startDate: string
}

export type Project = {
    slug: string
    thumbnail: {
        url: string
    }
    title: string
    shortDescription: string
    technologies: KnownTech[],
    pageBanner: {
        url: string
    },
    sections: ProjectSection[],
    githubUrl?: string,
    linkProjeto?: string,
    description: {
        raw: RichTextContent
    }
}

export type ProjectSection = {
    title: string,
    image: {
        url: string
    }
}

export type ProjectsPageData = {
    projects: Project[]
}

export type ProjectPageData = {
    project: Project
}