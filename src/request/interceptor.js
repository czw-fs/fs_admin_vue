import requestSuccessHandle from "@/request/interceptor/requestSuccessHandle.js";
import responseSuccessHandle from "@/request/interceptor/responseSuccessHandle.js";
import responseErrorHandler from "@/request/interceptor/responseErrorHandler.js";
import requestErrorHandler from "@/request/interceptor/requestErrorHandler.js";
import axios from "axios";


axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: import.meta.env.VUE_APP_BASE_API,
    // 超时
    timeout: 120000
});


axios.interceptors.request.use(requestSuccessHandle, requestErrorHandler)
axios.interceptors.response.use(responseSuccessHandle, responseErrorHandler)

export default service