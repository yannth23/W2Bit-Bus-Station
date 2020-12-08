let routes = require('./routes');
let express = require('express')

const app = express();

app.use(express.json());
app.use(routes);

let port = process.env.PORT || 5000


app.listen(port)

// app.listen(5000);
console.log("server running on " + port)
