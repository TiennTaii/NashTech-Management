import classNames from 'classnames/bind';
import styles from './header.module.scss';
import { Outlet, useLocation } from 'react-router-dom';

import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import routes from '../../config/routes';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const location = useLocation();
    const [name, setName] = useState();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                <Dropdown.Item onClick={handleShow}>
                                    <div onClick={handleShow}>Log out</div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Outlet />
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h3 className={cx('modal-title')}>Are you sure</h3>
                </Modal.Header>
                <Modal.Body>Do you want to log out?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose} href="/">
                        Log out
                    </Button>
                    <Button variant="outline-primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </header>
    );
}

export default Header;
