// fetching data from the API using axios library

import axios from 'axios'

// get request
//const axios = require('axios');

// Make a request for a user with a given ID
/*axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); */

const fetchApiData = () => {
    return axios.get('http://localhost:5628/products')
        .then(res => {
            console.log(res)
            return res
        })
        .catch(err => {
            console.error(err)
        })

}

export default fetchApiData