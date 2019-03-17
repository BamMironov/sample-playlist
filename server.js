const express = require('express');
const cors = require('cors');
const app = express();
const externalApi = require('./server/external-api');

app.use(cors());

app.get('/getTracks', (req, res) => {
    externalApi.request('tracks', req.query)
        .then(result => {
            res.send(result.data);
        })
        .catch(error => res.send("Oops! Errors: " + error));
});

app.get('/getArtists', (req, res) => {
    externalApi.request('artists', req.query)
        .then(result => {
            res.send(result.data);
        })
        .catch(error => res.send("Oops! Errors: " + error));
});

app.get('/getGenres', (req, res) => {
    externalApi.request('genres', req.query)
        .then(result => {
            res.send(result.data);
        })
        .catch(error => res.send("Oops! Errors: " + error));
});

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});