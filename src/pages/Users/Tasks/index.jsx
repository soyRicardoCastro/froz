import { LayoutDashboard, Header } from "../../../components";
import { Link } from "react-router-dom";
import { tasks } from "../../../constants/data";
// import { useTasks } from "../../../hooks/tasks";
// import { useQueryClient } from "react-query";

export default function Tasks() {
  // const qc = useQueryClient();
  // const { data, isLoading } = useTasks();

  // console.log(data);

  return (
    <LayoutDashboard>
      <Header title="Your Tasks" category="User" />
      <div className="w-11/12 mx-auto grid grid-cols-2 gap-1">
        {/* {tasks.map((task) => (
          <p>task</p>
        ))} */}
        {tasks.map((task, i) => (
          <div
            className="w-full h-36 gap-1 flex flex-col bg-gray-500 p-4 overflow-hidden rounded-md"
            key={i}
          >
            <h1 className="text-md text-gray-200">{task.name}</h1>
            <p className="text-xs text-gray-300">{task.desc}</p>
            <Link to={`/tasks/${task.id}`}>
              <button className="py-2 px-4 rounded-full text-white bg-lime-500">
                Read more
              </button>
            </Link>
          </div>
        ))}
      </div>
    </LayoutDashboard>
  );
}
