import { NavLink } from "react-router-dom";
import { SidebarItem } from "./SidebarItem";
import { sidebarRoutes } from "../../constants/router";
import logo from '../../assets/1.png'

export default function Sidebar() {
  return (
    <div className="sm:w-20 md:w-64 bg-slate-800 sidebar">
      <div className="py-4 px-6">
        <NavLink to="/">
          <img src={logo} alt='Frozt Enterprise Logo' />
        </NavLink>
      </div>

      <div className="mt-4 fixed overflow-y-auto overflow-x-hidden h-[85vh] sm:w-20 md:w-60">
        {sidebarRoutes.map((item, i) => (
          <>
            <h3
              key={i}
              className="mx-6 overflow-hidden mb-2 text-xs text-gray-100 uppercase tracking-widest"
            >
              {item.title}
            </h3>
            <div key={item.title}>
            {item.links.map((link, i) => (
              <SidebarItem item={link} key={i} />
            ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
