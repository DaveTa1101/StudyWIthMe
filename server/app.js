const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const route = require("../server/app/routers/authRoute");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Database connection
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log("Database connection error: ", err.message);
	});

app.use("/", route);

app.listen(process.env.PORT, () => {
	console.log("Server is running on port " + process.env.PORT);
});
