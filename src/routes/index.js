import Home from '../components/Home';
import User from '../components/User';
import Asset from '../components/Asset';
import Assignment from '../components/Assignment';
import Request from '../components/Request';
import Report from '../components/Report';

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
