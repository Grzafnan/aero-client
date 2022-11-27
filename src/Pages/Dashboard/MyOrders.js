import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';

const MyOrders = () => {

  const { user } = useContext(AuthContext)
  // console.log(user);

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings', user?.uid, user?.email],
    queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/my-bookings/${user?.uid}?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Aero-Token')}`
      }
    })
      .then(res => {
        // console.log(res?.data?.data);
        const data = res?.data?.data;
        return data;
      })
  })


  const handlePayment = (id) => {
    console.log(id);
  }





  return (
    <>
      {
        isLoading ? (
          <Spinner />
        )
          :
          (
            <>
              <div className='font-[Poppins]'>
                <h1 className='text-3xl text-center mb-3 font-semibold'>My Orders</h1>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Car Name</th>
                        <th>Price</th>
                        <th>Meet Location</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        bookings?.length && (
                          <>
                            {
                              bookings?.map((booking, idx) => (
                                <tr key={booking?._id} >
                                  <th>{idx + 1}</th>
                                  <td>
                                    <img
                                      src={booking?.image}
                                      alt={booking?.name}
                                      className="w-28"
                                    />

                                  </td>
                                  <td>{booking?.brand} {booking?.name}</td>
                                  <td>{booking?.price}</td>
                                  <td>{booking?.location}</td>
                                  <td>
                                    {booking?.phone}
                                  </td>
                                  <td>
                                    <button
                                      onClick={() => handlePayment(booking?._id)}
                                      className='btn btn-sm btn-primary text-gray-100 text-sm font-medium'
                                    >Pay</button>
                                  </td>
                                </tr>
                              ))
                            }
                          </>
                        )
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )
      }
    </>
  );
};

export default MyOrders;