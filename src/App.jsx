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
  function handleNewProjectClick(){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
      }
  })
  }
  if(projectsState.selectedProjectId===null){
    content=<NewProject/>
  }else if(projectsState.selectedProjectId===undefined){
    content=<NoProjectSelected onClickNewProject={handleNewProjectClick}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onClickNewProject={handleNewProjectClick}/>      
      {content}
    </main>
  );
}

export default App;
