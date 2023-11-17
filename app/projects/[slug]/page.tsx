import { ProjectDetails } from "@/app/components/pages/project-details";
import { ProjectSections } from "@/app/components/pages/projects/project-sections";
import { ProjectsPageStaticData } from "@/app/types/page-info";
import { ProjectPageData } from "@/app/types/projects";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";

type ProjectProps = {
    params: {
        slug: string
    }
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