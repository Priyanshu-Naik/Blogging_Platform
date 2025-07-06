import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URL } from '../constraints/config';
import { getAccessToken } from '../utils/common_utils';

const API_URL = 'https://blogging-platform-dl3w.onrender.com';

const axiosInstances = axios.create({
    baseURL: API_URL,
    timeout: 10000,
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
    API[key] = (body, showUploadProgress, showDownloadProgress, dynamicParams) => {
        const token = getAccessToken();
        const isUpload = key === 'uploadFile';

        const url = typeof value.url === 'function' ? value.url(dynamicParams) : value.url;

        // Build config
        const config = {
            method: value.method,
            url: url,
            ...(value.method !== 'GET' && value.method !== 'DELETE' && { data: body }),  // Avoid body on DELETE
            ...(isUpload && { data: body }),  // But allow data for upload
            responseType: value.responseType,
            headers: {
                ...(isUpload ? {} : { 'Content-Type': 'application/json' }),
                ...(token && { Authorization: token })
            },
            onUploadProgress: (progressEvent) => {
                if (showUploadProgress) {
                    const percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: (progressEvent) => {
                if (showDownloadProgress) {
                    const percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentageCompleted);
                }
            }
        };

        return axiosInstances(config);
    };
}

export { API };