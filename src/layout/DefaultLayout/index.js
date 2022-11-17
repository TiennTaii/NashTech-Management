import Header from './Header';
import Sidebar from './Slidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

// These are static elements that don't change when going back and forth between pages
