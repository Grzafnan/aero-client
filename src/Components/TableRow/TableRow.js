import React from 'react';

const TableRow = (seller) => {
  const { seller: user, idx, handleDeleteSeller, handelVerifySeller } = seller;

  return (
    <>
      <tr>
        <th>{idx + 1}</th>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>
          <button
            onClick={() => handelVerifySeller(user._id)}
            className='btn btn-xs btn-success text-sm font-medium'
          >Verify</button>
        </td>
        <td>
          <button
            onClick={() => handleDeleteSeller(user?._id)}
            className='btn btn-xs btn-error text-sm font-medium'
          >Delete</button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;