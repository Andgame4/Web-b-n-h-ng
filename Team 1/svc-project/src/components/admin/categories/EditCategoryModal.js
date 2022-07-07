import React, { Fragment, useContext, useState, useEffect } from "react";
import { CategoryContext } from "./index";
import { editCategory, getAllCategory } from "./FetchApi";
import { editCategories } from '../../../api/categoriesAPI'
const EditCategoryModal = (props) => {
  const { data, dispatch } = useContext(CategoryContext);

  const [des, setDes] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  

  useEffect(() => {
    setName(data.editCategoryModal.name);
    setDes(data.editCategoryModal.des);
    setStatus(data.editCategoryModal.status);
    setId(data.editCategoryModal.id);
    console.log(data.editCategoryModal)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.editCategoryModal.modal]);

  

  const fetchData = async () => {
    let responseData = await getAllCategory();
    if (responseData.Categories) {
      dispatch({
        type: "fetchCategoryAndChangeState",
        payload: responseData.Categories,
      });
    }
  };

  const submitForm = async () => {
    dispatch({ type: "loading", payload: true });
    
    if (name.length >0) {
      if(name!=data.editCategoryModal.name||des!=data.editCategoryModal.des)
          editCategories(id,name,des);
      else alert("không có dữ liệu thay đổi")
    }
    else alert("Tên danh mục không được để trống")

    }


  return (
    <Fragment>
      {/* Black Overlay */}
      <div
        onClick={(e) => dispatch({ type: "editCategoryModalClose" })}
        className={`${
          data.editCategoryModal.modal ? "" : "hidden"
        } fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50`}
      />
      {/* End Black Overlay */}

      {/* Modal Start */}
      <div
        className={`${
          data.editCategoryModal.modal ? "" : "hidden"
        } fixed inset-0 m-4  flex items-center z-30 justify-center`}
      >
        <div className="relative bg-white w-11/12 md:w-3/6 shadow-lg flex flex-col items-center space-y-4  overflow-y-auto px-4 py-4 md:px-8">
          <div className="flex items-center justify-between w-full pt-4">
            <span className="text-left font-semibold text-2xl tracking-wider">
             Sửa danh mục
            </span>
            {/* Close Modal */}
            <span
              style={{ background: "#303031" }}
              onClick={(e) => dispatch({ type: "editCategoryModalClose" })}
              className="cursor-pointer text-gray-100 py-2 px-2 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col space-y-1 w-full py-4">
            <label htmlFor="name">Tên danh mục</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label htmlFor="description">Mô tả danh mục</label>
            <textarea
              value={des}
              onChange={(e) => setDes(e.target.value)}
              className="px-4 py-2 border focus:outline-none"
              name="description"
              id="description"
              cols={5}
              rows={5}
            />
          </div>
          
      
          <div className="flex flex-col space-y-1 w-full pb-4 md:pb-6">
            <button
              style={{ background: "#303031" }}
              onClick={(e) => submitForm()}
              className="rounded-full bg-gray-800 text-gray-100 text-lg font-medium py-2"
            >
              Sửa danh mục
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditCategoryModal;
