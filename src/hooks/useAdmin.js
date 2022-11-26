import axios from "axios"
import { useEffect, useState } from "react"

export const useAdmin = email => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      axios.get(`${process.env.REACT_APP_API_URL}/users/admin/${email}`)
        .then(res => {
          console.log(res)
          // setIsAdmin(res?.data?.isAdmin)
          setIsAdminLoading(false)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [email]);

  return [isAdmin, isAdminLoading]
}