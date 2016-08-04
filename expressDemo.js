let express = require('express')
let app = new express();

app.get('/',function (req,res) {
    res.send('hello');
})

app.listen(3000);