import { useState } from "react"
export default function NewTask({onAddTask, projectId}){
const [newTaskInput, setNewTaskInput]=useState("");

function onChangeInput(event){
    setNewTaskInput(event.target.value);
}

function handleAddTask(){
if(newTaskInput.trim().length===0){
    return;
}
const task={
    text:newTaskInput,
    id:Math.random(),
    projectId:projectId,
}
onAddTask(task);
setNewTaskInput("");

}
    return(<div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm  bg-stone-200" onChange={onChangeInput} value={newTaskInput}/>
        <button className="text-stone-700 hover:text-stone-950" onClick={handleAddTask}>+Add Task</button>
    </div>)
}