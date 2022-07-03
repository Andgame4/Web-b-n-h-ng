import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Bánh Mỳ Bảo Lâm, Địa chỉ: Ngã 3 Khánh Yên Hạ, Văn Bàn, Lào Cai. Số điện thoại: 0397896070
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
