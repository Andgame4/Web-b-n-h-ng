import React  from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { BsFacebook } from 'react-icons/bs'
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import '../../assets/css/footer.scss'

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='information'>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3 column'>
                        <div className='col-md-1 col-lg-2 col-xl-2 mx-auto mb-4 care'>
                            <div className='title'>CHĂM SÓC KHÁCH HÀNG</div>
                            <ul className='link-more'>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Trung Tâm Trợ Giúp</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Thanh Toán</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Vận Chuyển</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Trả Hàng & Hoàn Tiền</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Chính Sách Bảo Hành</a>
                                </li>
                            </ul>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 about-us'>
                            <div className='title'>GIỚI THIỆU</div>
                            <ul className='link-more'>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Giới Thiệu</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Tuyển Dụng</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Điều Khoản</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Chính Sách Bảo Mật</a>
                                </li>
                                <li className='lsm'>
                                    <a href='/' className='' title=''>Chính Hãng</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 follow'>
                            <div className='title'>THEO DÕI CHÚNG THÔI TRÊN</div>
                            <ul className='link-more'>
                                <li className='lsm'>
                                    <BsFacebook />
                                    <a href='/' className='' title=''>Facebook</a>
                                </li>
                                <li className='lsm'>
                                    <FaInstagramSquare />
                                    <a href='/' className='' title=''>Instagram</a>
                                </li>
                                <li className='lsm'>
                                    <FaLinkedin />
                                    <a href='/' className='' title=''>Linkedin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div className='address'>
                <div className='infor-address'>Công Ty CP Savvycom</div>
                <div className='infor-address'>
                    Level 7, Sky Park tower B No, 3 Tôn Thất Thuyết, Cầu Giấy, Hà Nội 100000
                </div>
            </div>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022. Tất cả các quyền được bảo lưu.
            </div>
        </MDBFooter>
    );
}
 
export default Footer;