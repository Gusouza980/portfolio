import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        socials {
          url
          iconSvg
        }
        knowntechs {
          iconSvg
          name
          startDate
        }
        highlightedProjects {
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
        workExperiences {
          companyLogo {
            url
          }
          role
          companyName
          companyUrl
          startDate
          endDate
          description {
            raw
          }
          technologies {
            name
          }
        }
      }
    }
  `
  return fetchHygraphQuery(query, 1)
}

export default async function Home() {
  const { page: pageData } = await getPageData()
  return (
    <>
      <HeroSection homeInfo={pageData}></HeroSection>
      <KnownTechs techs={pageData.knowntechs}></KnownTechs>
      <HighlightedProjects projects={pageData.highlightedProjects}/>
      <WorkExperience experiences={pageData.workExperiences}></WorkExperience>
    </>
  )
}
