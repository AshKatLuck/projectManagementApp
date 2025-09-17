import ProjectsSidebar from "./components/ProjectsSideBar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectselected.jsx";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
      <NoProjectSelected/>
      {/* <NewProject/> */}
    </main>
  );
}

export default App;
