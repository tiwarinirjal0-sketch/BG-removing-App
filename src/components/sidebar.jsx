
import { menuItems }from "./menuitems";
import { useState } from "react";



export default function SideBar(){
    const [iscollapsed, setcollapse] = useState(false)
    return( 
        
        !iscollapsed ? (<div className=" absolute border-r w-40 h-full bg-white flex flex-col justify-evenly">
            <div className=" flex justify-center absolute bg-white text-black w-5 h-5 top-5 right-0 cursor-pointer text-xl items-center p-3 rounded-full hover:bg-red-400 hover:text-white"
            onClick={()=>setcollapse(prev=>!prev)}
            >X</div>
        
            
            
           { menuItems.map(title =>{
           return(<div className="flex flex-col gap-4">
                <h2 className="border-b-1 bg-pink-100 flex align-center justify-center p-5">{title.title}</h2>
                
                <div className="flex flex-col gap-4">
                    { title.items.map((item,index)=>{
                       return(
                       <div className="px-2 py-2 bg-gray-200 flex justify-between rounded-xl hover:bg-gray-300 cursor-pointer active:bg-gray-200"
                       
                      onClick={()=> setcollapse(true)}

                       >

                        <div className="flex gap-2">
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                        </div>
                        <span>{">"}</span>
                    </div>)
                    })
                    
                    
                    }
                    
                    
                </div>
            </div>) })           
            }
            
            
          
            
             
        </div>):
        <div className=" flex items-center absolute text-white text-3xl top-[10px] left-0  p-2 w-10 h-10 rounded-full hover:bg-gray-700 hover:text-white cursor-pointer"
        
        onClick={()=>setcollapse(prev=>!prev)}
        >
            ☰
            
        </div>
    )
}