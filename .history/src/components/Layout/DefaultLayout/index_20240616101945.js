import classNames from 'classnames/bind';
import Header from '~/components/Layout/component/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './SideBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <Header />
                <div className={cx('container')}>
                    <Sidebar />
                    <div className={cx('content')}>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
