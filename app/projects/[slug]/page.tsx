import { ProjectDetails } from "@/app/components/pages/project-details";
import { ProjectSections } from "@/app/components/pages/projects/project-sections";
import { ProjectsPageStaticData } from "@/app/types/page-info";
import { ProjectPageData } from "@/app/types/projects";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { Metadata } from "next";

type ProjectProps = {
    params: {
        slug: string
    }
}

export const metadata = {
    title: 'Projeto - Template Portfolio',
}

const getProjectDetails = async (slug : string): Promise<ProjectPageData> => {
    const query = `
      query ProjectDetailsQuery {
        project(where: {slug: "${slug}"}) {
            slug
            thumbnail {
              url
            }
            title
            shortDescription
            description {
                raw
            }
            githubUrl
            linkProjeto
            pageBanner {
                url
            }
            sections {
                title
                image {
                    url
                }
            }
            technologies {
              name
            }
        }
      }
    `
    return fetchHygraphQuery(query, 60 * 60 * 24)
  }

export default async function Project({ params: {slug} } : ProjectProps) {
    const { project } = await getProjectDetails(slug)
    return (
        <>  
            <ProjectDetails project={project}/>
            <ProjectSections sections={project.sections} />
        </>
    )
}

export async function generateStaticParams() {
    const query = `
        query ProjectsSlugQuery() {
            projects(first:100){
                slug
            }
        }
    `

    const { projects } = await fetchHygraphQuery<ProjectsPageStaticData>(query, 60 * 60 * 24)

    return projects
}

export async function generateMetadata({ params: {slug} } : ProjectProps) : Promise<Metadata> {
    const data = await getProjectDetails(slug)
    const project = data.project

    return {
        title: project.title,
        description: project.shortDescription,
        openGraph: {
            title: project.title,
            description: project.shortDescription,
            images: [
                {
                    url: project.thumbnail.url,
                    width: 1200,
                    height: 630,
                }
            ]
        }
    }
}