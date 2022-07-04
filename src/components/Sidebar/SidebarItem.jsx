import { NavLink } from "react-router-dom";

export const SidebarItem = ({ item }) => (
  <NavLink
    className="flex items-center px-6 py-2.5 bg-gray-500 text-gray-200 hover:bg-slate-400 hover:text-white group rounded-xl ml-2 mb-1 transition"
    to={item.path}
    style={({ isActive }) => ({
      backgroundColor: isActive ? "bg-slate-800" : "",
    })}
  >
    {item.icon}
    <span className="hidden md:block">{item.label}</span>
  </NavLink>
);
