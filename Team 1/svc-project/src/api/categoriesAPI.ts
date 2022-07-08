import axios from 'axios';
import { useState } from 'react';

function getCategories() {
  const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
  const id = Number.parseInt(JSON.parse(localStorage.getItem('id')!));

  const baseURL = 'http://10.22.4.62:8762/category/';
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
      const categories = response.data.data ;
  
      return categories;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function addCategories(name:any, desc:any){
    const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
    const id = Number.parseInt(JSON.parse(localStorage.getItem('id')!));

    const baseURL = `http://10.22.4.62:8762/category`;
    const data = { name: name, desc: desc };
    // const accessToken =
    //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwidXNlcl9uYW1lIjoiZnJvbnRlbmRAZ21haWwuY29tIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNjYyMTgzMzgyLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiIwZTBmYmE2MC04MTk4LTRkZGQtODk2ZS1jMTJiY2QwMDdmNDIiLCJjbGllbnRfaWQiOiJjbGllbnQifQ.XUCFYC5JG944cLmZIBcSoMoeiBjXARcWmzNkYsX5r_lpPW8YcIH5-tU7DDmLMFH-kU6Rk5MDFiL3pQaci9n-2PSb0vrQNyz14Ppal3BwEm-PtFuVBgAdm6VglvoHJU-cxmj0ztLi7-wC2VGH8Qm1MIxR9nSCqKMKT4sJ4JqJUdDHYa3xuzDSUvV5hCTWHa7jOQwkDnInBbJTAEeJga--AqILyiaYkkUQgjXi9lxUHlSq1S3hP-xJTAuxbAKkcHGp9Iksbk_KIg0Cu_Kc1UKy0b4z9YlyU4czuAdcALZtISd_G9y7iLWus9KfIuT_QNtrBmgNOATei2rivlvCkZa9XA';
    const config = {
      headers: {
        Authorization: 'Bearer ' + jwtToken,
      },
    };

    return axios
      .post(baseURL, data, config)
      .then(function (response) {
        const categories = response.data.data;
        alert('Thêm danh mục thành công')
        return categories;
                

      })
      .catch(function (error) {
        alert("Thêm danh mục thất bại")
        throw error;
      });
}
export function editCategories(idx: string, name: any, desc: any) {
  const jwtToken = JSON.parse(localStorage.getItem('accessToken')!);
  const id = Number.parseInt(JSON.parse(localStorage.getItem('id')!));

  const baseURL = `http://10.22.4.62:8762/category/${idx}`;
  const data = { name: name, desc: desc };
  // const accessToken =
  //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwidXNlcl9uYW1lIjoiZnJvbnRlbmRAZ21haWwuY29tIiwic2NvcGUiOlsidWkiXSwiZXhwIjoxNjYyMTgzMzgyLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJqdGkiOiIwZTBmYmE2MC04MTk4LTRkZGQtODk2ZS1jMTJiY2QwMDdmNDIiLCJjbGllbnRfaWQiOiJjbGllbnQifQ.XUCFYC5JG944cLmZIBcSoMoeiBjXARcWmzNkYsX5r_lpPW8YcIH5-tU7DDmLMFH-kU6Rk5MDFiL3pQaci9n-2PSb0vrQNyz14Ppal3BwEm-PtFuVBgAdm6VglvoHJU-cxmj0ztLi7-wC2VGH8Qm1MIxR9nSCqKMKT4sJ4JqJUdDHYa3xuzDSUvV5hCTWHa7jOQwkDnInBbJTAEeJga--AqILyiaYkkUQgjXi9lxUHlSq1S3hP-xJTAuxbAKkcHGp9Iksbk_KIg0Cu_Kc1UKy0b4z9YlyU4czuAdcALZtISd_G9y7iLWus9KfIuT_QNtrBmgNOATei2rivlvCkZa9XA';
  const config = {
    headers: {
      Authorization: 'Bearer ' + jwtToken,
    },
  };

  return axios
    .put(baseURL, data, config)
    .then(function (response) {
      const categories = response.data.data;
      alert('Thêm danh mục thành công');
      return categories;
    })
    .catch(function (error) {
      alert('Thêm danh mục thất bại');
      throw error;
    });
}

export default getCategories;
