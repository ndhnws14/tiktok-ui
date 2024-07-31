// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/585a1985ee148825ca1adb89e3cce263.jpeg?lk3s=a5d48078&nonce=58098&refresh_token=4afbe7269580ac6e4a827b1f603c4bc5&x-expires=1722578400&x-signature=r%2FGbAubDMLNFsepBwfIjhQy18wU%3D&shp=a5d48078&shcp=81f88b70"
                        alt=""
                    />
                    <div className={cx('info-item')}>
                        <p className={cx('nickname')}>
                            <strong>vuonghonganh</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Hồng Cam</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
