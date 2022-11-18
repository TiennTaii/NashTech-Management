import styles from './sideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img
                    src="https://vcdn1-kinhdoanh.vnecdn.net/2020/01/16/12-4472-1579159249-1579160129-3325-6795-1579160166.png?w=0&h=0&q=100&dpr=2&fit=crop&s=D8mMIyEsQ_DZ66aSj0yNjQ"
                    alt=""
                />
                <div>Online Asset Management</div>
            </div>

            <div className={cx('content')}>
                <div className={cx('home')}>Home</div>
                <div className={cx('user')}>Manage User</div>
                <div className={cx('asset')}>Manage Asset</div>
                <div className={cx('assignment')}>Manage Assignment</div>
                <div className={cx('request')}>Request For Returning</div>
                <div className={cx('return')}>Return</div>
            </div>
        </aside>
    );
}

export default Sidebar;
