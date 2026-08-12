const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dns = require("dns");
dns.setServers(["8.8.8.8", "4.4.4.4"]);
const connectDB = require("./src/utils/db")
const vaultRoute = require("./src/route/vaultRoute.js");

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())

connectDB();

app.get("/", (req, res) => {
    res.status(200).json({
        message: "password vault api is running"
    })
})

app.use("/api/vault", vaultRoute)

app.listen(PORT, () => {
    console.log("server is running on port 5000");
})