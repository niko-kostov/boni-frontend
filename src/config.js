import axios from 'axios';

export const API_DRIVER = axios.create({
    baseURL: "http://localhost:8080/",
    responseType: "json",
    headers: {
        "Content-Type": "application/json"
    }
});

export const setAuthToken = () => {
    if(localStorage.getItem('token')){
        API_DRIVER.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    }else{
        API_DRIVER.defaults.headers.common['Authorization'] = "Bearer " + sessionStorage.getItem('token');
    }
}
