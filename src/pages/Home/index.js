import { useAuthContext } from '../../context/RequiredAuth/authContext';
import { useEffect, useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import classNames from 'classnames/bind';
import styles from '../../components/Header/header.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [hideNew, setHideNew] = useState(false);
    const { token } = useAuthContext();
    const [showFirstChangePassword, setShowFirstChangePassWord] = useState(false);

    const toggleBtnNew = () => {
        setHideNew((pre) => !pre);
    };

    useEffect(() => {
        if (token.needUpdatePwdOnLogin) {
            setShowFirstChangePassWord(true);
        } else {
            setShowFirstChangePassWord(false);
        }
    }, [token]);

    return (
        <div>
            <Modal
                show={showFirstChangePassword}
                onHide={() => {
                    if (token.needUpdatePwdOnLogin) {
                        setShowFirstChangePassWord(true);
                    } else {
                        setShowFirstChangePassWord(false);
                    }
                }}
            >
                <Modal.Header closeButton>
                    <h3 className={cx('modal-title')}>Change Password</h3>
                </Modal.Header>
                <Modal.Body>
                    <div>This is the first time you logged in.</div>
                    <div>You have to change your password to continue.</div>
                    <hr></hr>
                    <Form>
                        <h6>New password:</h6>
                        <div className={cx('input-new-password')}>
                            <Form.Control type={hideNew ? 'text' : 'password'} placeholder="Enter new password" />
                            <div className={cx('icon-new')} onClick={toggleBtnNew}>
                                {hideNew ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger">Save</Button>
                </Modal.Footer>
            </Modal>
            <h1>Home </h1>
        </div>
    );
}

export default Home;
