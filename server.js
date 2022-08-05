const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const app = express();
const helper = require("./utils/helpers")
const PORT = process.env.PORT || 3002;
const sequelize = require("./config/connections")
const hbs = exphbs.create({helper});
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: "secret",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session(sess));
app.use(require("./controllers"));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`))
});


