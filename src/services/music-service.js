import BaseService from './base-service';

class MusicService extends BaseService {
    constructor() {
        super("http://localhost:3000");
    }

    getTracks(params) {
        return this.getRequest("getTracks", params)
    }
}

export default new MusicService();