import axios from 'axios';

//   Save user in db & get token
export const savedUserDB = (name, email, role) => {

  const user = { name, email, role }

  axios.put(`${process.env.REACT_APP_API_URL}/users/${email}`, user)
    .then(res => {
      console.log(res.data);
      if (res?.data?.success) {
        localStorage.setItem('Aero-Token', res?.data?.data?.token)
      }
    }).catch(err => {
      console.log(err);
    })
}

