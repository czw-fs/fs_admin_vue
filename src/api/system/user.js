import request from '@/request/interceptor.js'

export const getPageApi = (params) => {
    return request({
        url: "/user/getUserPage",
        method: "get",
        params,
    });
};
