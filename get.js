const express = require('express')
const app = express()
const port = 8000

//app.get('/', (req, res) => res.send('Hello World!'))
//

app.get('/get', function(req, res){

    var color  = req.param('color');
    var city  = req.param('city');

    var time = new Date().toISOString().replace('T', ' ').substr(0, 19);

    //res.send(time +' ' +  user_id + ' ' + user_name);
    res.send(  '"color":"' + color + '","city":"'+ city + '",'+               '"ip":"192.168.219.100","time":"'+time+'","email":            "cordence@naver.com","stuno":"20141534"'   );
});

app.listen(port, () => console.log('Example app listening on port ${port}!'))

