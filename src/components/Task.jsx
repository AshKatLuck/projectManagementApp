import NewTask from "./Newtask.jsx";

export default function Task({onAddTask, onDeleteTask, projectId, tasks}){
    function handleDeleteTask(id){
        onDeleteTask(id);
    }
    return(
        <section>
            <h2 className="text-xl font-bold my-4 text-stone-700">Tasks</h2>
            <NewTask onAddTask={onAddTask} projectId={projectId}/>
            {tasks.length===0 && <p className="text-stone-600 my-4">This project doesn't have any tasks yet</p>}
            {tasks.length!==0 && 
            <ul className="p-4 mt-8 bg-stone-100 rounded-md">
                {tasks.map(task=>
                (
                    <li key={task.id} className="flex justify-between my-4">
                        <span>
                            {task.text}
                        </span>
                        <button className="text-stone-700 hover:text-red-500" onClick={()=>handleDeleteTask(task.id)}>Clear</button>
                    </li>
                ))}
            </ul>
            }
            
        </section>
    )
}