import PublicPageContainer from "@components/container/PublicPageContainer";
import VideoHero from "./components/VideoHero";
import FilterSection from "./components/FilterSection";
import ProjectCardSection from "./components/ProjectCardSection";


const Projects = () => {
  return (
  
    <PublicPageContainer className="flex flex-col gap-4">
       <VideoHero/>
       <FilterSection/>
       <ProjectCardSection/>
     </PublicPageContainer>
  
  
  );
};

export default Projects;
