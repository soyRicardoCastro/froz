import { Routes, Route } from "react-router-dom";
import {
  AllUniversities,
  AllUsers,
  CreateUser,
  Dashboard,
  LoginRegister,
  Missing,
  MyUni,
  Profile,
  Tasks,
  OneTask,
  Unauthorized,
} from "./pages";
import "./styles/scrollbar.css";
import RequireAuth from "./components/RequireAuth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>landing page</h1>} />
      {/* Login Register Routes */}
      <Route path="/login-register" element={<LoginRegister />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/register" element={<LoginRegister />} />

      {/* User Routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />

      {/* <Route element={<RequireAuth allowedRoles={['user', 'admin', 'agent']} />}> */}
      <Route path="/universities" element={<AllUniversities />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:id" element={<OneTask />} />
      {/* </Route> */}

      <Route path="/my-universities" element={<MyUni />} />
      <Route element={<RequireAuth allowedRoles={["user"]} />}></Route>

      {/* Admin Routes */}
      <Route path="/create-user" element={<CreateUser />} />
      <Route element={<RequireAuth allowedRoles={["admin"]} />}></Route>

      <Route path="/users" element={<AllUsers />} />
      <Route
        element={<RequireAuth allowedRoles={["admin", "agent"]} />}
      ></Route>
      {/* Others Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/*" element={<Missing />} />
    </Routes>
  );
}
