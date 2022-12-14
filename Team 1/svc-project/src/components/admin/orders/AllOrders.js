import moment from "moment";
import { Fragment, useContext, useEffect } from "react";

import getOrderAdmin from "api/orderAdminApi";

import dataProduct from "./dataOrderfake";
import { OrderContext } from "./index";

const AllCategory = (props) => {

  // const { orders, setOrders} = useState([])
  let orders = [];
  let loading = false;
  const dataOrder = dataProduct.data;
  orders = dataOrder
  useEffect(() => {
    const getProduct = async () => {
      const dataOrder = await getOrderAdmin();

    }
    getProduct();
  }, []);
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
        <table className="table-auto border w-full my-2 text-center">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Sản phẩm</th>
              <th className="px-4 py-2 border">Số lượng</th>
              <th className="px-4 py-2 border">Color</th>
              <th className="px-4 py-2 border">Size</th>
              <th className="px-4 py-2 border">Tổng</th>
              <th className="px-4 py-2 border">Tình trạng</th>
              <th className="px-4 py-2 border">Khách hàng</th>

              <th className="px-4 py-2 border">Số điện thoại</th>
              <th className="px-4 py-2 border">Địa chỉ</th>
              <th className="px-4 py-2 border">Ngày tạo</th>

              <th className="px-4 py-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>

            {orders.length > 0 ? (
              orders.map((item, index) => {
                return (
                  <>
                    <CategoryTable
                      key={`i d ${index}`}
                      order={item}
                    />
                  </>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="12"
                  className="text-xl text-center font-semibold py-8"
                >
                  Không tìm thấy đơn hàng nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Tổng có {orders && orders.length} đơn hàng
        </div>
      </div>
    </Fragment>
  );
};

/* Single Category Component */
const CategoryTable = ({ order, editOrder }) => {
  const { dispatch } = useContext(OrderContext);
  const orderState = ["", "Chờ xác nhận", "chờ giao hàng ", "Đang giao hàng", "Đã giao hàng", "Hủy đơn"]

  return (
    <Fragment>
      <tr className="border-b">
        <td className="hover:bg-gray-200 p-2 text-center">
          {order.productOrderDetailDTOS.map(item => <p>{item.name} </p>)}

        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {order.productOrderDetailDTOS.map(item => <p> {item.quantity} </p>)}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {order.productOrderDetailDTOS.map(item => <p>{item.color} </p>)}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {order.productOrderDetailDTOS.map(item => <p>{item.size} </p>)}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {orderState[Number(order.status)]}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {order.totalAmount}đ
        </td>

        <td className="hover:bg-gray-200 p-2 text-center">{order.userOrderDetailDTO.name}</td>

        <td className="hover:bg-gray-200 p-2 text-center">{order.userOrderDetailDTO.phone}</td>
        <td className="hover:bg-gray-200 p-2 text-center">{order.userOrderDetailDTO.address}</td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {moment(order.createdAt).format("DD-MM-YYYY")}
        </td>
        <td className="p-2 items-center justify-center d-flex ">
          <span
            onClick={(e) => editOrder(order._id, true, order.status)}
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

            className="cursor-pointer hover:bg-gray-200 rounded-lg p-2 mx-1"
          >
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </span>
        </td>
      </tr>
    </Fragment>
  );
};

export default AllCategory;
