import React, { Fragment, useContext, useEffect, useState } from "react";
import { getAllCategory, deleteCategory } from "./FetchApi";
import { CategoryContext } from "./index";
import moment from "moment";
import getCategories from "../../../api/categoriesAPI"
const apiURL = process.env.REACT_APP_API_URL;

const AllCategory = (props) => {
  const { data, dispatch } = useContext(CategoryContext);
  const [categories, setCategories] = useState([])
  const loading = false;
  useEffect(() => {
    const getProduct = async () => {
      const categoryData = await getCategories();
      setCategories(categoryData)
    }

    getProduct();

  }, []);

  const deleteCategoryReq = async (cId) => {
    let deleteC = await deleteCategory(cId);
    if (deleteC.error) {
      console.log(deleteC.error);
    } else if (deleteC.success) {
      console.log(deleteC.success);
    }
  };

  /* This method call the editmodal & dispatch category context */
  const editCategory = (id, name, des) => {

    dispatch({
      type: "editCategoryModalOpen",
      id: id,
      des: des,
      name: name,
    });

  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg
          class="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
              <th className="px-4 py-2 border">Danh mục</th>

              <th className="px-4 py-2 border">Chú thích</th>

              <th className="px-4 py-2 border">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories && categories.length > 0 ? (
              categories.map((item, key) => {
                return (
                  <CategoryTable
                    category={item}
                    editCat={(id, des, name) =>
                      editCategory(id, des, name)
                    }
                    deleteCat={(cId) => deleteCategoryReq(cId)}
                    key={`category ${key}`}
                  />
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-xl text-center font-semibold py-8"
                >
                  Không tìm thấy danh mục nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="text-sm text-gray-600 mt-2">
          Tổng có {categories && categories.length} danh mục
        </div>
      </div>
    </Fragment>
  );
};

/* Single Category Component */
const CategoryTable = ({ category, deleteCat, editCat }) => {
  return (
    <Fragment>
      <tr className="text-center">
        <td className="p-2 text-center">
          {category.name}
        </td>
        <td className="p-2 text-center">
          {category.desc}
        </td>
        <td className="p-2 d-flex justify-center  text-center">
          <span
            onClick={(e) =>
              editCat(
                category.id,
                category.name,
                category.desc,
              )
            }
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
            onClick={(e) => deleteCat(category._id)}
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

export default AllCategory;
