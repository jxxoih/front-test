import axios from 'axios';
import * as config from "config";

// node 서버 통신 API 모듈
export const reqAPI = async () => {
    const exPath = "/test";
    const reqPath = config.API_PATH + exPath;
    console.log("reqPath", reqPath);

    const data = {
        action: "test"
    }

    return await axios.post(reqPath, null, {
        params: {
            action: "test"
        }
    })
        .then((res) => res.data.data)
        .catch((err) => { console.log("err", err) })
}