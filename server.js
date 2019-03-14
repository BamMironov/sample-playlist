const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
var fma = require('free-music-archive');

app.use(cors());

const url = `http://freemusicarchive.org/api`;
const apiKey = `R2FNSRG1D3FGDKG6`;

app.get('/getTracks', function (req, res) {
    axios({
        method: 'get',
        url: `${url}/get/tracks.json`,
        params: {
            ...req.query,
            api_key: apiKey
        },
        responseType: 'json'
    })
    .then(result => {
        res.send(result.data);
    })
    .catch(error => res.send("Oops! Errors: " + error));
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});