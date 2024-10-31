import {ElMessage} from "element-plus";

export default (error)=> {
    console.log("请求错误")
    // ElMessage.error(error)
    return Promise.reject(error);
}