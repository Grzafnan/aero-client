import React from 'react';

const TableRow = (seller) => {
  console.log(seller);
  const { seller: user, idx } = seller;
  return (
    <>
      <tr>
        <th>{idx + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
          <button className='btn btn-xs btn-success text-sm font-bold'>Verify</button>
        </td>
        <td>
          <button className='btn btn-xs btn-error text-sm font-medium'>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;