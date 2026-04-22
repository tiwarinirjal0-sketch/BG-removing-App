import SideBar from "./components/sidebar";
import Hero from "./components/hero";
import NavBar from "./components/navbar";



export default function App(){


  return(
    <div className="w-screen h-screen bg-gray-800">
      <NavBar />
      <SideBar />
      <Hero />

    </div>
  )
}