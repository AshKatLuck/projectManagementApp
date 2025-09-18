import ProjectsSidebar from "./components/ProjectsSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectselected.jsx";
import { useState } from "react";
import SelectedProject from "./components/SElectedProject.jsx";
function App() {
  const [projectsState, setProjectsState]=useState({
    selectedProjectId:undefined,// we are using undefined for no projects available, null for adding new project button clicked and id when project is created
    projects:[],
    tasks:[]
  });
  const project=projectsState.projects.find(project=>project.id==projectsState.selectedProjectId);
  // console.log(project);
  let content=<SelectedProject project={project} onDeleteProject={handleDeleteProject} 
  onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

  function handleAddTask(task){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        tasks:[...prevState.tasks,task]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        tasks:prevState.tasks.filter(task=>task.id!==id)
      }
    })
  }

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
  function handleSelectProject(id){
    setProjectsState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id
      }
    })
  }
  function handleDeleteProject(id){
    console.log("inside handleDeleteProject");
    setProjectsState(prevState=>{
      return{
        ...prevState,
        projects:prevState.projects.filter(project=>project.id!==id),
        selectedProjectId:undefined,
      }
    })
  }
  if(projectsState.selectedProjectId===null){
    content=<NewProject onSave={handleSaveNewProject} onCancel={handleCancelProject}/>
  }else if(projectsState.selectedProjectId===undefined){
    content=<NoProjectSelected onClickNewProject={handleStartNewProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onClickNewProject={handleStartNewProject} 
      projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/>      
      {content}
    </main>
  );
}

export default App;
