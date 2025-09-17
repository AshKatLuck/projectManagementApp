import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";
function NewProject({onSave, onCancel}){
    const titleRef=useRef();
    const descriptionRef=useRef();
    const dueDateRef=useRef();
    const modal=useRef();
    function handleSave(){
        const enteredTitle=titleRef.current.value;
        const enteredDescription=descriptionRef.current.value;
        const enteredDueDate=dueDateRef.current.value;
        console.log("inside handleSave")
        //validation of the input
        if(enteredTitle.trim()===''||enteredDescription.trim()===''||enteredDueDate.trim()===''){
            modal.current.open();
            return;
        }

        onSave({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate,
            id:Math.random(),
        })
        titleRef.current.value='';
        descriptionRef.current.value='';
        dueDateRef.current.value='';
    }
  

    return(
        <div className="w-[35rem] mt-16">
            <Modal ref={modal} buttonCaption={"Okay"}>
                    <h2 className="text-xl font-bold my-4 text-stone-700">Invalid Input</h2>
                    <p className="text-stone-600 mb-4">Oops!! Looks like you forgot to enter an input value</p> 
                    <p className="text-stone-600 mb-4">Please enter valid input in all fields!</p>                   
            </Modal>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
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