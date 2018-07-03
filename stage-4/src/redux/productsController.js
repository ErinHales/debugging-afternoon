import axios from 'axios';

function getAllProducts() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}

export default getAllProducts;