require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const { PORT } = require("./constants");
const rootRouter = require("./routes/root.route");
const connectDB = require("./database/db");
const { connectCloud } = require("./config/cloudinary");
const { urlencodedParser, jsonParser } = require("./middlewares/parser.middleware");


const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware
app.use(urlencodedParser);
app.use(jsonParser);
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// connect to mongodb database and cloudinary
connectDB();
connectCloud();


// router
app.get('/', (req, res) => {
    res.render("home");
});

app.use("/api", rootRouter);


// run server
const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`✅ Server is now running on ${URL}`);
});