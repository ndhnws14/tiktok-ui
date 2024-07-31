import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/585a1985ee148825ca1adb89e3cce263.jpeg?lk3s=a5d48078&nonce=58098&refresh_token=4afbe7269580ac6e4a827b1f603c4bc5&x-expires=1722578400&x-signature=r%2FGbAubDMLNFsepBwfIjhQy18wU%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <Button className={cx('btn-follow')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vuonghonganh</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Hồng Cam</p>
                <p className={cx('analytis')}>
                    <strong className={cx('value')}>14.05M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>14.05M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
