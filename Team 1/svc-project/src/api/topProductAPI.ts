import axios from 'axios';
import { useState } from 'react';

function getTopProduct() {
  const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
  const id = Number.parseInt(JSON.parse(localStorage.getItem('id')!));

  // const baseURL = 'http://10.22.4.62:8762/product';
  const baseURL = 'http://10.22.4.62:8762/order/report/top/products?top=5';
  // const accessToken =
  //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwidXNlcl9uYW1lIjoiZnJvbnRlbmRAZ21haWwuY29tIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNjYxOTIwMjA5LCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiJmMTEwMDc0ZC1mMWJmLTQzZDUtODdlYS1mNGEwODJjOWRjNTMiLCJjbGllbnRfaWQiOiJjbGllbnQifQ.E7xje9UtVKf-p-zwKwjVv_FoVWGMGZO1wTlLWdVCkJUGmpB159-fPOQdJE9ZeZws4IYVhnHovJOMWFt9DCaJ3DCfWq05TcDNyS9Dj_wOt2T6aSFPbIgoJgr53u6kq9_EVswzNhcQNG5snhSQCKoDICPUWgiPecUajNpj-8hgBSt373Q9GjKG81L1JY5hItupFgkhSDPbxr2GLo_JJSdlbe1G7DxxAVJpe3W5gQviA3UkBRGZm_-AX8GLl06neLA1oGV5Mh8OydjIfdxiGT-fyhU7M-cR4dkWdMXqQCHtBVL0lBrqDNxdI385E74qFd4aBTsCuy9j2xHSiKmIbwWCBA';

  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  return axios
    .get(baseURL, config)
    .then(function (response) {
      const dataAdminProduct = response.data.data;
      return dataAdminProduct;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default getTopProduct;
