import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URL } from '../constraints/config';

const API_URL = 'http://localhost:8000';

const axiosInstances = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    // headers: {
    //     "content-type": "application/json"
    // }
})

axiosInstances.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosInstances.interceptors.response.use(
    function (response) {
        //stop the loader here
        return processResponse(response);
    },
    function (error) {
        //stop the loader here
        return Promise.reject(processError(error));
    }
)

const processResponse = (response) => {
    if (response?.status === 200) {
        return {
            isSuccess: true,
            data: response.data
        }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError = (error) => {
    if (error.response) {
        console.log('ERROR IN RESPONSE', error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
    } else if (error.request) {
        console.log('ERROR IN REQUEST', error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ''
        }
    } else {
        console.log('ERROR IN NETWORK', error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkFailure,
            code: ''
        }
    }
}


const API = {};

for (const [key, value] of Object.entries(SERVICE_URL)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) => {
        const config = {
            method: value.method,
            url: value.url,
            data: body,
            headers: value.headers || { 'Content-Type': 'application/json' },
            responseType: value.responseType,
            onUploadProgress: function (progressEvent) {
                if (showUploadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function (progressEvent) {
                if (showDownloadProgress) {
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }
        };

        // ✅ Override Content-Type only for file upload
        if (key === 'uploadFile') {
            delete config.headers; // Let Axios set it properly with boundary
        }

        return axiosInstances(config);
    };
}
// console.log((SERVICE_URL), API);
export { API };