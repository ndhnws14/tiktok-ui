import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/03464eb64f2a42d397b634a039023ff0~c5_300x300.webp?lk3s=a5d48078&nonce=65708&refresh_token=85468be0e3343064fec45d0547143d2b&x-expires=1719727200&x-signature=hm%2BpVBEvOv6whawVj%2FVckJRCVzI%3D&shp=a5d48078&shcp=c1333099"
                alt="Name.."
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Dong Ho</span>
                    <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyendongho</span>
            </div>
        </div>
    );
}

export default AccountItem;
