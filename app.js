let routes = require('./routes');
let express = require('express')

const app = express();

app.use(express.json());
app.use(routes);

app.listen(5000);
console.log("server running on port 5000")
