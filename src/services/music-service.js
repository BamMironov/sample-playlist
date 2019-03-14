import BaseService from './base-service';

class MusicService extends BaseService {
    constructor() {
        super("http://localhost:3000");
    }

    getTracks() {
        return this.getRequest("getTracks", {
            limit: 10,
            page: 1,
            sort_by: 'track_date_created',
            sort_dir: 'desc'
        })
    }
}

export default new MusicService();