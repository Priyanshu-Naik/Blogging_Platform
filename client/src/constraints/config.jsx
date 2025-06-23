export const API_NOTIFICATION_MESSAGES = {
    loading:{
        title: 'Loading...',
        message: 'Data is being loading. Please wait'
    },
    success:{
        title: 'Success',
        message:'Data Successfully Loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error while fetching response from the server. Please try again'
    },
    requestFailure:{
        title:'Error',
        message:'An error occurred while parsing the request data'
    },
    networkFailure:{
        title:'Error',
        message:'Unable to connect with the server. Please check the internet connectivity and try again later'
    }
}

export const SERVICE_URL = {
    userSignup: {url:'/signup', method: 'POST', headers: {"Content-Type": "application/json"}},
    userLogin: {url:'/login', method:'POST', headers: {"Content-Type": "application/json"}},
    uploadFile:{url:'/file/upload', method:'POST' , headers: { "Content-Type": "multipart/form-data" }}
}