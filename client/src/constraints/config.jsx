export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loading. Please wait'
    },
    success: {
        title: 'Success',
        message: 'Data Successfully Loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error while fetching response from the server. Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occurred while parsing the request data'
    },
    networkFailure: {
        title: 'Error',
        message: 'Unable to connect with the server. Please check the internet connectivity and try again later'
    }
}

export const SERVICE_URL = {
    userSignup: { url: '/signup', method: 'POST' },
    userLogin: { url: '/login', method: 'POST' },

    uploadFile: { url: '/file/upload', method: 'POST' },
    createPost: { url: '/create', method: 'POST' },

    getAllPosts: { url: '/posts', method: 'GET' },
    getPostById: { url: (params) => `/post/${params}`, method: 'GET' },
    deletePost: { url: (id) => `/post/${id}`, method: 'DELETE' },
    updatePost: { url: (id) => `/post/${id}`, method: 'PUT' },

    addComment: { url: '/comment', method: 'POST' },
    getCommentsByPostId: { url: (postId) => `/comments/${postId}`, method: 'GET' },
    deleteComment: { url: (id) => `/comment/${id}`, method: 'DELETE' },
    updateComment: { url: (id) => `/comment/${id}`, method: 'PUT' },
}