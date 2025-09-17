import Button from "./Button.jsx"
export default function ProjectsSidebar({onClickNewProject}){
    return(
        <aside className="w-1/3 px-6 py-12 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
            <ul></ul>
            <div>
                <Button onClick={onClickNewProject}>+ Add Project</Button>
            </div>            
        </aside>
    )
}