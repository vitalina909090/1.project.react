import { createBrowserRouter} from "react-router";
import App from "../App";
import About from "../pages/About";
import ToDoList from "../components/ToDoList/ToDoList";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetail";
import { getUserDetails, getUsers, searchUsers } from "../loaders/usersLoaders";
import SearchResults from "../pages/SearchResults";
import ErrorBoudary from "../components/ErrorBoudary";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <h1 className='text-3xl font-bold text-blue-600'> Home </h1>
            },
            {
                path: '/about',
                element: <  About />
            },
            {
                path: '/todo',
                element: <ToDoList />
            },
            {
                path: '/users',
                element: <Users />,
                loader: getUsers,
                errorElement: <ErrorBoudary />,
            },
            {
                path: '/users/:id',
                element: <UserDetails />,
                loader: getUserDetails,
                errorElement: <ErrorBoudary />

            },
            {
                path: '/search',
                element: <SearchResults />,
                loader: searchUsers
            }
        ]
    },
    {
        path: "*",
        element: <h1>Page Not Found 404</h1>
    }
]);

export default router;