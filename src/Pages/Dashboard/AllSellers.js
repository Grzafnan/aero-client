import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../Components/Spinner/Spinner';
import TableRow from '../../Components/TableRow/TableRow';

const AllSellers = () => {

  const { data: allSellers, isLoading } = useQuery({
    queryKey: ['allSellers'],
    queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/all-sellers`)
      .then(res => {
        console.log(res?.data?.data);
        const data = res?.data?.data
        return data
      })
  })



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
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allSellers?.map((seller, idx) => <TableRow
                      key={seller._id}
                      seller={seller}
                      idx={idx}
                    />)
                  }
                </tbody>
              </table>
            </div>
          )
      }
    </>
  );
};

export default AllSellers;