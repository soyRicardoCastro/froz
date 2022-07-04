import {
  UsersIcon,
  UserAddIcon,
  AcademicCapIcon,
  CollectionIcon,
  UserCircleIcon,
  TableIcon,
} from "@heroicons/react/outline";

const s = 'h-5 w-5 text-gray-400 mr-2 group-hover:text-white'

export const sidebarRoutes = [
  {
    title: "main",
    links: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <TableIcon className={s} />,
      },
      {
        label: "My Profile",
        path: "/profile",
        icon: <UserCircleIcon className={s} />,
      },
    ],
  },
  {
    title: "users",
    links: [
      {
        label: "All Users",
        path: "/users",
        icon: <UsersIcon className={s} />,
      },
      {
        label: "Create User",
        path: "/create-user",
        icon: <UserAddIcon className={s} />,
      },
    ],
  },
  {
    title: "universities",
    links: [
      {
        label: "All Universities",
        path: "/universities",
        icon: <AcademicCapIcon className={s} />,
      },
      {
        label: "My Universities",
        path: "/my-universities",
        icon: <AcademicCapIcon className={s} />,
      },
    ],
  },
  {
    title: "Others",
    links: [
      {
        label: "My Tasks",
        path: "/tasks",
        icon: <CollectionIcon className={s} />,
      },
    ],
  },
];

export const userRoutes = [
  {
    title: "main",
    links: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <TableIcon className={s} />,
      },
      {
        label: "My Profile",
        path: "/profile",
        icon: <UserCircleIcon className={s} />,
      },
    ],
  },
  {
    title: "universities",
    links: [
      {
        label: "All Universities",
        path: "/universities",
        icon: <AcademicCapIcon className={s} />,
      },
      {
        label: "My Universities",
        path: "/my-universities",
        icon: <AcademicCapIcon className={s} />,
      },
    ],
  },
  {
    title: "Others",
    links: [
      {
        label: "My Tasks",
        path: "/tasks",
        icon: <CollectionIcon className={s} />,
      },
    ],
  },
]