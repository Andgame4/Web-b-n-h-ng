import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/cart.scss';

const Cart = () => {
    return (
        <div className="container">
            <form name="frm_cart" id="frm_cart" method="post" action="">
                <div className="cart pt-40 cart-page">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="checkout-process-bar block-border">
                                <ul>
                                    <li className="active"><span>Giỏ hàng </span></li>
                                    <li className=""><span>Thanh toán</span></li>
                                </ul>
                                <p className="checkout-process-bar__title">Giỏ hàng</p>
                            </div>
                            <div id="box_product_total_cart">
                                <div className="cart__list">
                                    <h2 className="cart-title">Giỏ hàng của bạn <b><span className="cart-total">1</span> Sản Phẩm</b></h2>
                                    <table className="cart__table">
                                        <thead>
                                            <tr>
                                                <th>Tên Sản phẩm</th>
                                                <th>Chiết khấu</th>
                                                <th>Số lượng</th>
                                                <th>Tổng tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="cart__product-item">
                                                        <div className="cart__product-item__img">
                                                            <a href="https://ivymoda.com/sanpham/dam-lua-phoi-beo-ms-48m7640-34952"><img src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG" alt="Đầm lụa phối bèo"/></a>
                                                        </div>
                                                        <div className="cart__product-item__content">
                                                            <a href="https://ivymoda.com/sanpham/dam-lua-phoi-beo-ms-48m7640-34952">
                                                                <h3 className="cart__product-item__title">
                                                                    Đầm lụa phối bèo
                                                                </h3>
                                                            </a>
                                                            <div className="cart__product-item__properties">
                                                                <p>Màu sắc: <span>Xanh Bạc Hà </span></p>
                                                                <p>Size: <span>xl</span></p>
                                                                <p className="cost">Giá gốc: <span>1.990.000đ</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="cart-sale-price">
                                                </td>
                                                <td>
                                                    <div className="product-detail__quantity-input">
                                                        <input type="number" value="1" min="0" data-product-sub-id="173207" data-product-index="0"/>
                                                            <div className="product-detail__quantity--increase">
                                                                +
                                                            </div>
                                                            <div className="product-detail__quantity--decrease">
                                                                -
                                                            </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="cart__product-item__price">1.990.000đ</div>
                                                </td>
                                                <td>
                                                    <a href="javascript:void(0)" className="remove-item-cart" data-product-index="0"><span className="icon-ic_garbage"></span></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart__list--attach">
                                </div>
                                <div className="cart__list--attach">
                                </div>
                            </div>
                            <a href="javascript: window.history.back();" className="btn btn--large btn--outline btn-cart-continue mb-3">
                                <span className="icon-ic_left-arrow"></span>
                                Tiếp tục mua hàng
                            </a>
                        </div>
                        <div className="col-lg-4 cart-page__col-summary">
                            <div className="cart-summary">
                                <div className="cart-summary__overview">
                                    <h3>Tổng tiền giỏ hàng</h3>
                                    <div className="cart-summary__overview__item">
                                        <p>Tổng sản phẩm</p>
                                        <p className="total-product">1</p>
                                    </div>
                                    <div className="cart-summary__overview__item">
                                        <p>Tổng tiền hàng</p>
                                        <p className="total-not-discount">1.990.000đ</p>
                                    </div>
                                    <div className="cart-summary__overview__item">
                                        <p>Thành tiền</p>
                                        <p><b className="order-price-total">1.990.000đ</b></p>
                                    </div>
                                    <div className="cart-summary__overview__item">
                                        <p>Tạm tính</p>
                                        <p><b className="order-price-total">1.990.000đ</b></p>
                                    </div>
                                </div>
                                <div className="cart-summary__note">
                                    <div className="inner-note d-flex">
                                        <div className="left-inner-note">
                                            <span className="fa fa-check-circle text-success"></span>
                                        </div>
                                        <div className="content-inner-note">
                                            <p className="text-success">Đơn hàng của bạn được Miễn phí ship</p>
                                            <div className="sub-note"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-summary__button">
                                <a href="https://ivymoda.com/thanhtoan/dathang_step1" className="btn btn--large">Đặt hàng</a>
                            </div>
                            <div className="cart-summary__vouchers">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div id="modal_sale" className="modal fade" role="dialog">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <a href="https://ivymoda.com/customer/login"><img src="https://pubcdn2.ivymoda.com/images/sale30.png" className="img-responsive"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;