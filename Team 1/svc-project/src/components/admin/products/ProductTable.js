import React, { Fragment, useContext, useEffect, useState } from "react";
import { getAllProduct, deleteProduct } from "./FetchApi";
import moment from "moment";
import { ProductContext } from "./index";
import axios from 'axios';
import { fakeProductData } from "./productdatafake";
const apiURL = process.env.REACT_APP_API_URL;

const accessToken ="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwidXNlcl9uYW1lIjoiZnJvbnRlbmRAZ21haWwuY29tIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNjYxOTIwMjA5LCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiJmMTEwMDc0ZC1mMWJmLTQzZDUtODdlYS1mNGEwODJjOWRjNTMiLCJjbGllbnRfaWQiOiJjbGllbnQifQ.E7xje9UtVKf-p-zwKwjVv_FoVWGMGZO1wTlLWdVCkJUGmpB159-fPOQdJE9ZeZws4IYVhnHovJOMWFt9DCaJ3DCfWq05TcDNyS9Dj_wOt2T6aSFPbIgoJgr53u6kq9_EVswzNhcQNG5snhSQCKoDICPUWgiPecUajNpj-8hgBSt373Q9GjKG81L1JY5hItupFgkhSDPbxr2GLo_JJSdlbe1G7DxxAVJpe3W5gQviA3UkBRGZm_-AX8GLl06neLA1oGV5Mh8OydjIfdxiGT-fyhU7M-cR4dkWdMXqQCHtBVL0lBrqDNxdI385E74qFd4aBTsCuy9j2xHSiKmIbwWCBA"
const fetchProduct= async()=>{
  const res = await axios.get("http://10.22.4.62:8762/product",{
    headers: {
      "Authorization": `Bearer ${ accessToken }`
    }
  });
  console.log("product: ", res.data.data.content)
  return (res.data.data.content)

}
function formatCash(n,currency) {
  return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
}

const AllProduct = (props) => {
  const [productData,setProductData] = useState([])
  const { data, dispatch } = useContext(ProductContext);
  const products  = productData;

  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
    
     const data =await  fetchProduct();
  
    };

   fetchData();
  setProductData(fakeProductData);
  }, []);
  
  const fetchData = async () => {
    setLoading(false);
    let responseData = await getAllProduct();
    setTimeout(() => {
      if (responseData && responseData.Products) {
        dispatch({
          type: "fetchProductsAndChangeState",
          payload: responseData.Products,
        });
        setLoading(false);
      }
    }, 1000);
  };

  const deleteProductReq = async (pId) => {
    let deleteC = await deleteProduct(pId);
    if (deleteC.error) {
      console.log(deleteC.error);
    } else if (deleteC.success) {
      console.log(deleteC.success);
      fetchData();
    }
  };

  /* This method call the editmodal & dispatch product context */
  const editProduct = (pId, product, type) => {
    if (type) {
      dispatch({
        type: "editProductModalOpen",
        product: { ...product, pId: pId },
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Tên sản phẩm</th>
              <th className="px-4 py-2 border">Danh mục</th>
              <th className="px-6 py-2 border">Ảnh</th>
              <th className="px-6 py-2 border">Giá</th>
              <th className="px-6 py-2 border">Size</th>
              <th className="px-6 py-2 border">Màu</th>
              <th className="px-4 py-2 border">Số lượng tồn</th>
              <th className="px-4 py-2 border">Khuyến mại</th>
              <th className="px-4 py-2 border">Trạng thái</th>
              <th className="px-4 py-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products && products.length > 0 ? (
              products.map((item, key) => {
                return (
                  <ProductTable
                    product={item}
                    editProduct={(pId, product, type) =>
                      editProduct(pId, product, type)
                    }
                    deleteProduct={(pId) => deleteProductReq(pId)}
                    key={key}
                  />
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="10"
                  className="text-xl text-center font-semibold py-8"
                >
                  Không tìm thấy sản phẩm nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Tổng có {products && products.length} sản phẩm
        </div>
      </div>
    </Fragment>
  );
};

/* Single Product Component */
const ProductTable = ({ product, deleteProduct, editProduct }) => {
  return (
    <Fragment>
      <tr>
        <td className="p-2 text-left fw-bold">
          {product.productLine.name.length > 25
            ? product.productLine.name?.substring(1, 25).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
             + "..."
            : product.productLine.name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
        </td>
        <td className="p-2 text-left">
          {product.productLine.desc}
        </td>
        <td className="p-2 text-center">
          <img
            className="w-12 h-12 object-cover object-center"
            src={product.images[0].url}
            alt="pic"
          />
        </td>
        <td className="p-2 text-center">
          {formatCash(product.price," VND")}
        </td>
        
       
        <td className="p-2 text-center">
          {product.size}
        </td>
        <td className="p-2 text-center">
          { product.color} 
          </td>
        <td className="p-2 text-center">
          {/* {product.pOffer} */}
          </td>
        <td className="p-2 text-center">
          {moment(product.createdAt).format("lll")}
        </td>
       <td className="p-2 text-center">
          {product.active == "1" ? (
            <span className="bg-green-200 rounded-full text-center text-xs px-2 py-1 font-semibold">
              Còn hàng
            </span>
          ) : (
            <span className="bg-red-200 rounded-full text-center text-xs px-2 font-semibold">
              hết hàng
            </span>
          )}
        </td> 
        <td className="p-2 flex items-center justify-center">
          <span
            onClick={(e) => editProduct(product._id, product, true)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <svg
              className="w-6 h-6 fill-current text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span
            onClick={(e) => deleteProduct(product._id)}
            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <svg
              className="w-6 h-6 fill-current text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

export default AllProduct;
