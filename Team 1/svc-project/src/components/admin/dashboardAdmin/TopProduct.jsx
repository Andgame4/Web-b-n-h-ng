import React, { useState, useEffect } from 'react';
import getTopProduct from '../../../api/topProductAPI';
const TopProduct = () => {
  const [topProduct, setTopProduct] = useState([]);
  useEffect(() => {
    const getTopProductData = async () => {
      const dataTopProduct = await getTopProduct();
      setTopProduct(dataTopProduct);
      await console.log('dât: top: ', dataTopProduct);
    };
    getTopProductData();
  }, []);
  return (
    <div className="chart-dashboard col-12 shadow-lg mt-xl-20 ">
      <div className="header-content">Top sản phẩm bán chạy</div>
      <div className="product-detail justify-between">
        {topProduct?.map((item, index) => {
          return (
            <div
              key={` top product${index}`}
              className="d-flex justify-between mt-2 items-center font-bold"
            >
              <div className="product d-flex gap-5 items-center">
                <div className="product-img">
                  <img
                    src={item.imageUrl}
                    style={{ width: '70px', height: '80px', objectFit: 'cover' }}
                    alt=""
                  />
                </div>
                <div className="product-name">{item.name}</div>
              </div>
              <div className="left d-flex gap-5">
                <div> {item.reportTopProduct.totalOrders} orders</div>
                <div className="price">{item.price} đ</div>{' '}
              </div>
            </div>
          );
        })}
      </div>
      <hr className="border-b border-gray-200 mb-2" />
    </div>
  );
};

export default TopProduct;
