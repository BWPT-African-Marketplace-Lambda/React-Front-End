import axios from 'axios';

export const getToken = () => {
    return localStorage.getItem("token")
}

export default function api() {
    return axios.create({
        baseURL: "https://african-marketplace-bw.herokuapp.com/api",
        headers: {
            Authorization: getToken()
        }
    })
}