import axios from 'axios'

const axiosNew = axios.create({
    baseURL:'http:localhost:8000'
});
export default axiosNew;
