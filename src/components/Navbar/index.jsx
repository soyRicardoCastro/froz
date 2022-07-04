import { NavLink } from 'react-router-dom'
import avatar from "../../assets/avatar.svg";

export default function Navbar() {
  return (
    <div className="flex justify-end py-3 px-6 bg-slate-800 space-x-6">
      <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
        <NavLink to='/profile'>
          <img className="rounded-full w-8 h-8" src={avatar} alt="user-profile" />
        </NavLink>
        <NavLink to='/profile'>
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">Ricardo</span>
          </p>
        </NavLink>
      </div>
    </div>
  );
}
