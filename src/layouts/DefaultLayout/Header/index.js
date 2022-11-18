import classNames from 'classnames/bind';
import styles from './header.module.scss';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-page')}>Home {'>'} </div>

                <div className={cx('inner-name')}>
                    <div>Name</div>
                    <div>
                        <Dropdown style={{ fontSize: 24, color: 'white' }}>
                            <Dropdown.Toggle variant="" id="dropdown-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
