import ProjectsSidebar from "./components/ProjectsSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectselected.jsx";
import { useState } from "react";
function App() {
  const [projectsState, setProjectsState]=useState({
    selectedProjectId:undefined,// we are using undefined for no projects available, null for adding new project button clicked and id when project is created
    projects:[],
  });
  let content;

  function handleStartNewProject(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      }
  })
  }
  function handleSaveNewProject(projectObject){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        projects:[...prevState.projects,{...projectObject}]
      }
    })
  }
  function handleCancelProject(){
    console.log("cancel");
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      }
  })
  }
  console.log(projectsState);
  if(projectsState.selectedProjectId===null){
    content=<NewProject onSave={handleSaveNewProject} onCancel={handleCancelProject}/>
  }else if(projectsState.selectedProjectId===undefined){
    content=<NoProjectSelected onClickNewProject={handleStartNewProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onClickNewProject={handleStartNewProject} projects={projectsState.projects}/>      
      {content}
    </main>
  );
}

export default App;
