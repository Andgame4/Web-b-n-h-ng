import { MDBFooter } from 'mdb-react-ui-kit';
import '../../assets/css/footer.scss'

const Footer = () => {
    return (
        <MDBFooter className='text-center text-lg-start text-muted'>
            <section className='information'>
                <div className='container text-center text-md-start mt-5'>
                    <hr/>
                    <div className='row mt-3 column'>
                        <div className='col-md-1 col-lg-2 col-xl-2 mx-auto mb-4 info'>
                            <div className='top-left'>
                                <div className='logo-footer'>
                                    <a href='index.tsx'>
                                        <img src='https://pubcdn2.ivymoda.com/images/logo-footer.png' />
                                    </a>
                                </div>
                                <div className='logo-conthuong'>
                                    <a href='http://online.gov.vn/Home/WebDetails/36596'>
                                        <img src='https://pubcdn2.ivymoda.com/images/img-congthuong.png' alt='img-congthuong' />
                                    </a>
                                </div>
                            </div>
                            <div className='content-left'>
                                <div className='info-left'>
                                    <p>Du Kim Joint Stock Company with
                                        business registration number:
                                        0105777650
                                    </p>
                                    <p>
                                        <strong>Registration address: </strong>
                                        Pho Thap, P.Dai Mo, Q.Nam Tu Liem, TP.Ha Noi, Viet Nam
                                    </p>
                                    <p>
                                        <strong>Number phone: </strong>
                                        0243 205 2222
                                    </p>
                                </div>
                            </div>
                            <ul className='list-social'>
                                <li>
                                    <a href='https://www.facebook.com/thoitrangivymoda/' target='_blank'>
                                        <img src='https://pubcdn2.ivymoda.com/images/ic_fb.svg' alt='ic_fb' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#' target='_blank'>
                                        <img src='https://pubcdn2.ivymoda.com/images/ic_gg.svg' alt='ic_gg' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.instagram.com/ivy_moda/' target='_blank'>
                                        <img src='https://pubcdn2.ivymoda.com/images/ic_instagram.svg' alt='ic_ig' />
                                    </a>
                                </li>
                                <li>
                                    <a href='https://www.pinterest.com/ivymoda/_saved/' target='_blank'>
                                        <img src='https://pubcdn2.ivymoda.com/images/ic_pinterest.svg' alt='ic_pinterest' />
                                    </a>
                                </li>
                            </ul>
                            <div className='hotline'>
                                <a href='#'>Hotline: 0246 662 3434</a>
                            </div>
                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 introduce'>
                            <div className='title'>Introduce</div>
                            <div className='Ivymoda'>
                                <ul>
                                    <li>
                                    <a href='https://ivymoda.com/about/gioi-thieu'>About IVY moda</a>
                                    </li>
                                    <li>
                                    <a href='https://ivymoda.com/about/gioi-thieu'>System store</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='download'>
                                <p>Download App</p>
                                <ul>
                                    <li>
                                        <a id='app_ios' href='http://ios.ivy.vn' target='_blank'>
                                            <img src='https://pubcdn2.ivymoda.com/images/appstore.png'/>
                                        </a>
                                    </li>
                                    <li>
                                        <a id='app_android' href='http://android.ivy.vn' target='_blank'>
                                            <img src='https://pubcdn2.ivymoda.com/images/googleplay.png'/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 services'>
                            <div className='title'>Customer services</div>
                            <div className='policy'>
                                <ul>
                                    <li>
                                        <a href='https://ivymoda.com/about/chinh-sach-thanh-toan'>Payment policy</a>
                                    </li>
                                    <li>
                                        <a href='https://ivymoda.com/about/chinh-sach-thanh-toan'>Return policy</a>
                                    </li>
                                    <li>
                                        <a href='https://ivymoda.com/about/chinh-sach-thanh-toan'>Warranty policy</a>
                                    </li>
                                    <li>
                                        <a href='https://ivymoda.com/about/chinh-sach-thanh-toan'>Payment policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact'>
                            <div className='title'>Contact</div>
                            <div className='contact-me'>
                                <ul>
                                    <li>
                                        <a href='#'>Hotline</a>
                                    </li>
                                    <li>
                                        <a href='#'>Email</a>
                                    </li>
                                    <li>
                                        <a href='http://messenger.com/t/thoitrangivymoda'>Messenger</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr/>
            <div className='text-center p-4 copyright' >
                ©IVYmoda All rights reserved
            </div>
        </MDBFooter>
    );
}

export default Footer;