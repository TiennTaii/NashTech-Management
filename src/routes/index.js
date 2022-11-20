import Home from '../pages/Home';
import User from '../pages/User';
import Asset from '../pages/Asset';
import Assignment from '../pages/Assignment';
import Request from '../pages/Request';
import Report from '../pages/Report';
import config from '../config';
import CreateUser from '../pages/User/CreateUser/createUser';
import EditUser from '../pages/User/EditUser/editUser';

// route public
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.user, component: User },
    { path: config.routes.asset, component: Asset },
    { path: config.routes.assignment, component: Assignment },
    { path: config.routes.requestForReturning, component: Request },
    { path: config.routes.report, component: Report },
    { path: config.routes.createUser, component: CreateUser },
    { path: config.routes.editUser, component: EditUser },
];

export const privateRoutes = [];
