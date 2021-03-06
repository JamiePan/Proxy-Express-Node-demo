const express = require('express');
const axios = require('axios');
const app = express();

app.get('/api/autocomplete/:query', (req, res) => {
  const endpoint = `http://autocomplete.geocoder.api.here.com/6.2/suggest.json?app_id=GPzDTAf62RcsvxzsItmo&app_code=YnACIvbgW92mHKriEjgmoA&query=${req.params.query}&beginHighlight=<b>&endHighlight=</b>&country=AUS&maxresults=5`;
  axios({
    method: 'GET',
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      res.send(JSON.stringify(response.data));
    })
    .catch(error => {
      res.send(JSON.stringify(error), 400);
    });
});

app.listen(3001, () => {
  console.log('app is running on 3001');
});
