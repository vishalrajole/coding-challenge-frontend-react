import axios from "axios";
import { showLoader, hideLoader } from "../../views/components/loader/loader.action";
import { store } from "../../App";

export const ApiInstance = axios.create();
// Add a request interceptor
ApiInstance.interceptors.request.use(
    config => {
        store.dispatch(showLoader());
        return config;
    },
    error => {
        store.dispatch(hideLoader());
        return Promise.reject(error);
    }
);

// Add a response interceptor
ApiInstance.interceptors.response.use(
    response => {
        store.dispatch(hideLoader());
        return response;
    },
    error => {
        store.dispatch(hideLoader());
        return Promise.reject(error);
    }
);