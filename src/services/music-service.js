import BaseService from './base-service';

class MusicService extends BaseService {
    constructor() {
        super("http://localhost:3000");
    }

    getTracks(params) {
        return this.getRequest("getTracks", params)
    }

    getArtists(params) {
        return this.getRequest("getArtists", params)
    }

    getGenres(params) {
        return this.getRequest("getGenres", params)
    }
}

export default new MusicService();