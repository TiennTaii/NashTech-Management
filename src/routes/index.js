import Home from '../pages/Home';
import User from '../pages/User';
import Asset from '../pages/Asset';
import Assignment from '../pages/Assignment';
import Request from '../pages/Request';
import Report from '../pages/Report';

// route public
export const publicRoutes = [
    { path: '', component: Home },
    { path: 'user', component: User },
    { path: 'asset', component: Asset },
    { path: 'assignment', component: Assignment },
    { path: 'requestforreturning', component: Request },
    { path: 'report', component: Report },
];

// route displayed only when logged in
export const privateRoutes = [];
