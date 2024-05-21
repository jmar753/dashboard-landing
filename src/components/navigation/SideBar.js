import { NavLink } from "react-router-dom"

export default function SideBar(){
    return(
        <aside class="bg-neutral-900 text-white w-1/5 overflow-y-auto">
            <h1 className="flex px-8 items-center font-semibold text-3xl h-16">PH3 Tracker</h1>
            <div className="p-8">
                <div>
                    <p><NavLink to="/">Dashboard</NavLink></p>
                    <p><NavLink to="workouts">Workouts</NavLink></p>
                    <p><NavLink to="schedule">Schedule</NavLink></p>

                </div>
            </div>
        </aside>
    )
}