import React, { useContext } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';
import useTitle from '../../hooks/useTitle';

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  useTitle('My Products');

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => await axios.get(`${process.env.REACT_APP_API_URL}/products/${user?.uid}?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Aero-Token')}`
      }
    })
      .then(res => {

        const data = res?.data?.data;
        return data
      })
      .catch(err => console.log(err))
  })

  console.log('seller products', products);


  return (
    <>
      {
        isLoading ? (
          <Spinner />
        )
          :
          (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S/L</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products?.map((product, idx) => <tr
                      key={product._id}
                    >
                      <th>{idx + 1}</th>
                      <td>{product?.brand} {product?.name}</td>
                      <td>${product?.resellPrice}</td>
                      <td>
                        <button
                          //  onClick={() => handelVerifySeller(user._id)}
                          className='btn btn-xs btn-success text-sm font-medium'
                        >Available</button>
                      </td>
                      <td>
                        <button
                          //  onClick={() => handleDeleteSeller(user?._id)}
                          className='btn btn-xs btn-error text-sm font-medium'
                        >Delete</button>
                      </td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          )
      }
    </>
  );
};

export default MyProducts;