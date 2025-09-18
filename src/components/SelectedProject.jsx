import Task from "./Task.jsx";

export default function SelectedProject({project,onDeleteProject, onAddTask, onDeleteTask, tasks}){
    const formattedDueDate=new Date(project.dueDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    }
    )
    const tasksForThisProject=tasks.filter(task=>task.projectId==project.id);
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold mb-2 text-stone-600">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={()=>onDeleteProject(project.id)}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Task onAddTask={onAddTask} onDeleteTask={onDeleteTask} projectId={project.id} tasks={tasksForThisProject}/>
        </div>
    )
}