import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div>
        <ul className="flex justify-between p-4 px-4 text-2xl font-bold text-white bg-slate-500">
          <li> <NavLink to="/" className={({ isActive }) => (isActive ? "activelink" : undefined) }>Home</NavLink> </li>
          <li> <NavLink to="/add" className={({ isActive }) => (isActive ? "activelink" : undefined) }>Ajouter</NavLink> </li>
          <li> <NavLink to="/list" className={({ isActive }) => (isActive ? "activelink" : undefined) }>List</NavLink> </li>
        </ul>
    </div>
  )
}
