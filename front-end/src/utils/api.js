import axios from 'axios';

export default getToken = () => {
    return localStorage.getItem("token")
}

export default function api() {
    axios.create({
        baseURL: "https://african-marketplace-bw.herokuapp.com",
        headers: {
            Authorization: getToken()
        }
    })
}