const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(require('./controllers'));

app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));

