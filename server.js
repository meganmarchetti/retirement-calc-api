const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routers
const routers = require("./routes/calcRouter");
app.use("/calcs", routers);

const urouter = require("./routes/userRouter");
app.use("/users", urouter);

app.get("/", (req, res) => {
    res.send("howdy");
});

app.get("/retcalc", function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.post("/retcalc", function (req, res) {

});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});