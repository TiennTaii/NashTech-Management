import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Outlet, useLocation } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import routes from '../../config/routes';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const location = useLocation();
    const [name, setName] = useState();

    useEffect(() => {
        const result = Object.entries(routes).filter(([key, value]) => {
            if (location.pathname === value.path) {
                return value.name;
            }

            return null;
        });

        setName(result[0][1].name);
    }, [location]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-page')}>{name}</div>

                <div className={cx('inner-name')}>
                    <div>binhnv</div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="" style={{ color: 'white' }} />

                            <Dropdown.Menu style={{ color: 'white' }}>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Change password</Dropdown.Item>
                                <NavDropdown.Divider />
                                <Dropdown.Item href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Outlet />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
