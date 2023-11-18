import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { ProjectsPageData } from "../types/projects";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";

export const metadata = {
  title: 'Projetos'
}

const getPageData = async (): Promise<ProjectsPageData> => {
    const query = `
      query ProjectsQuery {
        projects {
            slug
            thumbnail {
              url
            }
            title
            shortDescription
            technologies {
              name
            }
        }
      }
    `
    return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Projects() {
    const { projects } = await getPageData()
    return (
        <>
            <PageIntroduction />
            <ProjectsList projects={projects}/>
        </>
    )
}