import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import axios from 'axios';

const AllBuyers = () => {

  const { user } = useContext(AuthContext);

  const { data: allBuyers, isLoading } = useQuery({
    queryKey: ['allBuyers', user?.email],
    queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/all-buyers/admin?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Aero-Token')}`
      }
    })
      .then(res => {
        console.log('Allbuyers-', res?.data?.data);
        const data = res?.data?.data
        return data
      })
      .catch(err => [
        console.log(err)
      ])
  })


  const handleDeleteBuyer = (id) => {
    console.log(id);
  }





  useTitle('All Buyers');

  return (
    <div className='font-[Poppins]'>
      <h1 className='text-3xl text-center mb-3 font-semibold'>All Buyers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S/L</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allBuyers?.map((buyer, idx) => (
                <tr key={buyer?._id} >
                  <th>{idx + 1}</th>
                  <td>{buyer?.name}</td>
                  <td>{buyer?.email}</td>
                  <td>
                    <span className='border-2 border-secondary rounded-full px-2 text-sm font-semibold'>
                      {
                        buyer?.role
                      }
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteBuyer(buyer?._id)}
                      className='btn btn-xs btn-error text-sm font-medium'
                    >Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllBuyers;