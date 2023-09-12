import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    // headers: {
    //     'Authorization': 'be0820954828a033d2f94008db02d94b', // Replace with your API key
    //     'Content-Type': 'application/json',
    //   },
    // headers:{
//  "content":"application/json"
//   
    // },
    params:{
        "api_key":"be0820954828a033d2f94008db02d94b"
    }
})

export default axiosInstance