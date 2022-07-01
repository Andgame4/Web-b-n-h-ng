import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';

export const Row = memo(({ data, handleShow, handleDelete }: any) => {
  console.log('re-render');
  return (
    <tr>
      <th scope="row">{data.id}</th>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.address}</td>
      <td>
        <Button variant="primary" onClick={() => handleShow(data)}>
          <FiEdit3 />
        </Button>
        <Button variant="primary" onClick={() => handleDelete(data.id)}>
          <AiFillDelete />
        </Button>
      </td>
    </tr>
  );
});
