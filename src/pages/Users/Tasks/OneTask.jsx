import { LayoutDashboard, Header } from "../../../components";
import { useTask } from "../../../hooks/tasks";
import { useParams } from "react-router-dom";

export default function OneTask() {
  const params = useParams();
  const { data: task, error, isLoading, isFetching } = useTask(params.id);

  if (isLoading)
    return (
      <LayoutDashboard>
        <Header title="Task" category="Users" />
        <h1 className="h-screen ml-10 mt-10 text-white text-3xl">
          Loading data...
        </h1>
      </LayoutDashboard>
    );

  if (Error)
    return (
      <LayoutDashboard>
        <Header title="Task" category="Users" />
        <h1 className="h-screen ml-10 mt-10 text-white text-3xl">Error...:/</h1>
      </LayoutDashboard>
    );

  return (
    <LayoutDashboard>
      <Header title="Task" category="Users" />
      {isFetching && (
        <span className="text-sm text-white ml-10 mb-10">
          Refreshing data...
        </span>
      )}
      <div>
        <h1>{task.name}</h1>
        <p>{task.content}</p>
      </div>
    </LayoutDashboard>
  );
}
