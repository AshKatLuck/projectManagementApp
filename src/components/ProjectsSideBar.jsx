export default function ProjectsSidebar(){
    return(
        <aside className="w-1/3 px-6 py-12 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-50">Your Projects</h2>
            <ul></ul>
            <div>
                <button className="w-full bg-stone-700 text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">+ Add Project</button>
            </div>            
        </aside>
    )
}