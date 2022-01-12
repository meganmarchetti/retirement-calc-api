const express = require("express");
const app = express();

//process.env.PORT || 3000
const port = 3000;

//middlewares
app.use(express.json());

//routers
const routers = require("./routes/calcRouter");
app.use("/calcs", routers);

const urouter = require("./routes/userRouter");
app.use("/users", urouter);

app.get("/", (req, res) => {
    res.send("howdy");
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});