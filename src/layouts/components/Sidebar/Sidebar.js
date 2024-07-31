import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested Account" />
            <SuggestedAccounts label="Following Account" />
        </aside>
    );
}

export default Sidebar;
