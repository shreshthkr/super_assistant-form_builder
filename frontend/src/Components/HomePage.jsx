import React from 'react'
import AllRoutes from '../AllRoutes/AllRoutes'
import { NavLink } from 'react-router-dom'


const links = [
    {path: "/comprehension", text: "Comprehension"},
    {path: "/categorize", text: "Categorized "},
    {path: "/cloze", text: "Cloze"},
]
const HomePage = () => {
  return (
    <div >
        <div className="flex justify-evenly items-center h-screen h-20 mt-30 border">
     {links.map((link)=>(
        <NavLink key={link.path}
         to={link.path}
         className=" text-30 font-bold"
        >
            {link.text}
        </NavLink>
     ))}
     </div>
     <AllRoutes />
    </div>
  )
}

export default HomePage
