import classNames from 'classnames/bind';
import Header from '~/components/Layout/component/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <SideBar></SideBar>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
