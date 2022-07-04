import { useQueryClient } from "react-query";
import { useR } from "../../../hooks/users";
import { LayoutDashboard, Header } from "../../../components";
import avatar from "../../../assets/avatar.svg";

export default function Profile() {
  const qC = useQueryClient();
  const { data: user, error, isLoading, isFetching } = useR();

  console.log(user);
  if (isLoading)
    return (
      <LayoutDashboard>
        <Header category="User" title="Profile" />
        <h1 className="h-screen ml-10 mt-10 text-white text-3xl">
          Loading data...
        </h1>
      </LayoutDashboard>
    );

  if (error)
    return (
      <LayoutDashboard>
        <Header category="User" title="Profile" />
        <h1 className="text-white text-3xl py-60 my-60">Error...:/</h1>
      </LayoutDashboard>
    );

  return (
    <LayoutDashboard>
      <Header title="Profile" category="User" />
      {isFetching && (
        <span className="text-sm text-white ml-10 mb-10">
          Refreshing data...
        </span>
      )}
      <div className="flex items-center justify-center flex-col gap-5">
        <img
          src={avatar}
          className="sm:w-16 sm:h-16 md:w-32 md:h-32 rounded-full"
          alt={`Avatar of ${user.name} ${user.lastname}`}
        />
        <div className="w-4/5 mx-auto gap-2 flex flex-col items-center">
          <h2 className="text-3xl text-white capitalize">{`${user.name} ${user.lastname}`}</h2>
          <p className="text-xl font-semibold text-gray-400 capitalize">
            {user.roles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </p>
          <p className="text-md text-gray-200">
            <span className="font-semibold">Email: </span> {user.email} |{" "}
            <span className="font-semibold">Phone: </span>
            {user.phone}
          </p>
          <p className="text-md text-gray-300">
            <span className="font-semibold">About Me: </span>
            {user.about}
          </p>
          <p className="text-md text-gray-300">
            <span className="font-semibold">Address: </span>
            {user.address}
          </p>
        </div>
      </div>
    </LayoutDashboard>
  );
}
