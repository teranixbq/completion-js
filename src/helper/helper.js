const validateRequest = (body) => {
    if (!body || !body.request) {
        return false;
    }
    return true;
};

const successResponse = (data) => {
    return {
        status: true,
        data: {
            reply: data,
        },
    };
};

const errorResponse = (message) => {
    return {
        status: false,
        message: message,
    };
};

module.exports = {
    validateRequest,
    successResponse,
    errorResponse
};