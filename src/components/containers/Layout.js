import Header from "../navigation/Header"
import SideBar from "../navigation/SideBar"

export default function Layout(props){
    return(
        <div class="flex flex-col h-screen">
        <Header/>
        <div class="flex flex-row h-[calc(100vh-5rem)]">
          <SideBar/>
          <main class="bg-blue-500 w-2/3 overflow-y-auto">
            {props.children}
          </main>
        </div>
      </div>
    )
}