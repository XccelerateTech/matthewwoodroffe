let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
    let arr = req.body;
    function getSum(total, num) {
        return total + num;
    };
    let sum = arr.reduce(getSum);
    res.json({'sum': sum});
  });

app.listen(8080);