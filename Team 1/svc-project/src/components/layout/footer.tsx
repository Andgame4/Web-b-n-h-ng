import { MDBFooter } from 'mdb-react-ui-kit';
import '../../assets/css/footer.scss';

const Footer = () => {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <section className="information">
        <div className="container text-center text-md-start">
          <hr />
          <div className="row mt-3 column">
            <div className=" col-lg-2 col-xl-2 mx-auto mb-4 info">
              <div className="top-left">
                <div className="logo-footer">
                  <a href="index.tsx">
                    <img src="https://pubcdn2.ivymoda.com/images/logo-footer.png" />
                  </a>
                </div>
                <div className="logo-conthuong">
                  <a href="http://online.gov.vn/Home/WebDetails/36596">
                    <img
                      src="https://pubcdn2.ivymoda.com/images/img-congthuong.png"
                      alt="img-congthuong"
                    />
                  </a>
                </div>
              </div>
              <div className="content-left">
                <div className="info-left">
                  <p>Du Kim Joint Stock Company with business registration number: 0105777650</p>
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
              <ul className="list-social">
                <li>
                  <a href="https://www.facebook.com/thoitrangivymoda/" target="_blank">
                    <img src="https://pubcdn2.ivymoda.com/images/ic_fb.svg" alt="ic_fb" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="https://pubcdn2.ivymoda.com/images/ic_gg.svg" alt="ic_gg" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ivy_moda/" target="_blank">
                    <img
                      src="https://pubcdn2.ivymoda.com/images/ic_instagram.svg"
                      alt="ic_ig"
                      style={{ height: '24px' }}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/ivymoda/_saved/" target="_blank">
                    <img
                      src="https://pubcdn2.ivymoda.com/images/ic_pinterest.svg"
                      alt="ic_pinterest"
                      style={{ height: '24px' }}
                    />
                  </a>
                </li>
              </ul>
              <div className="hotline">
                <a href="#">Hotline: 0246 662 3434</a>
              </div>
            </div>
         </div>
        </div>
    </section>
        </MDBFooter>
    );
};

export default Footer;
