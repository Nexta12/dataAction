import PublicPageContainer from "@components/container/PublicPageContainer";
import VideoHero from "./components/VideoHero";
import FilterSection from "./components/FilterSection";
import ProjectCardSection from "./components/ProjectCardSection";
import { useEffect, useState } from "react";
import { ProjectDetails } from "@customTypes/projects";
import apiClient from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { ErrorFormatter } from "@pages/errors/errorFormatter";


const Projects = () => {
  const [allProjects, setAllProjects] = useState<ProjectDetails[]>([]);
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await apiClient.get(endpoints.getAllProjects);
        setAllProjects(response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", ErrorFormatter(error));
      }
    };
    fetchProjects();
  }, []);


  return (
  
    <PublicPageContainer className="flex flex-col gap-4">
       <VideoHero/>
       <FilterSection projects={projects} allProjects={allProjects} setProjects={setProjects} />
       <ProjectCardSection projects={projects} />
     </PublicPageContainer>
  
  
  );
};

export default Projects;
