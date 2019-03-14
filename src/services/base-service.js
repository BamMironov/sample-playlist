import axios from "axios";

export default class BaseService {
    constructor(url) {
        this.url = url;
    }

    getRequest(route, params) {
        return axios({
            method: 'get',
            url: `${this.url}/${route}`,
            params
        })
    }
}