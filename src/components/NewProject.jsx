import Input from "./Input.jsx";
import { useRef } from "react";
function NewProject({onSave}){
    const titleRef=useRef();
    const descriptionRef=useRef();
    const dueDateRef=useRef();
    function handleSave(){
        const enteredTitle=titleRef.current.value;
        const enteredDescription=descriptionRef.current.value;
        const enteredDueDate=dueDateRef.current.value;

        //validation of the input

        onSave({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate,
            id:Math.random(),
        })
    }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 rounded-md px-6 py-2 hover:bg-stone-950" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input label="title" type="text" ref={titleRef}/>
                <Input label="description" textarea ref={descriptionRef} />
                <Input label="due date" ref={dueDateRef} type="date" />
            </div>
        </div>
    )
}
export default NewProject;