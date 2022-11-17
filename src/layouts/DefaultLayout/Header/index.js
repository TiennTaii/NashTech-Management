import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-page')}>Home</div>
                <div className={cx('inner-name')}>Name</div>
            </div>
        </header>
    );
}

export default Header;
