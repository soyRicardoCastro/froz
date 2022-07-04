// * Admin Routes
export { default as AllUsers } from "./Admin/AllUsers";
export { default as CreateUser } from "./Admin/CreateUser";

// * User Routes
export { default as AllUniversities } from "./Users/University/AllUni";
export { default as MyUni } from "./Users/University/MyUni";
export { default as Profile } from "./Users/Profile";
export { default as Tasks } from "./Users/Tasks";
export { default as OneTask } from "./Users/Tasks/OneTask";
export { default as Dashboard } from "./Users/Dashboard";

// * Login - Register Route
export { default as LoginRegister } from "./LoginRegister";

// * Others - Unauthorized, Missing(404)
export { default as Unauthorized } from "./Others/Unauthorized";
export { default as Missing } from "./Others/Missing";
