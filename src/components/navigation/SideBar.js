import { NavLink } from "react-router-dom"

export default function SideBar(){
    return(
        <aside class="bg-sky-600 w-1/4 overflow-y-auto">
            <div className="p-8">
                <h1>Hello, Guest</h1>
                <div>
                    <p><NavLink to="/">Dashboard</NavLink></p>
                    <p><NavLink to="workouts">Workouts</NavLink></p>
                    <p><NavLink to="schedule">Schedule</NavLink></p>

                </div>
            </div>
        </aside>
    )
}