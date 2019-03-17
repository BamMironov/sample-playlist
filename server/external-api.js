const axios = require('axios');
const url = `http://freemusicarchive.org/api`;
const apiKey = `R2FNSRG1D3FGDKG6`;

module.exports = {
    request: (entity, params) => {
        return axios({
            method: 'get',
            url: `${url}/get/${entity}.json`,
            params: {
                ...params,
                api_key: apiKey
            },
            responseType: 'json'
        })
    }
};
