import Button from "./Button.jsx"
export default function ProjectsSidebar({onClickNewProject, projects}){
    return(
        <aside className="w-1/3 px-6 py-12 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
            <div>
                <Button onClick={onClickNewProject}>+ Add Project</Button>
            </div>  
            <ul className="mt-8">
                {projects.map(project=><li key={project.id}>
                    <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                        {project.title}
                    </button>
                </li>)}
            </ul>
                      
        </aside>
    )
}