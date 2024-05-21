import Header from "../navigation/Header"
import SideBar from "../navigation/SideBar"

export default function Layout(props){
    return(
        <div class="flex flex-col">
            <div class="flex flex-row h-[calc(100vh)]">
                <SideBar/>
                <main class="bg-white w-3/4 overflow-y-auto">
                    {props.children}
                </main>
            </div>
        </div>
    )
}