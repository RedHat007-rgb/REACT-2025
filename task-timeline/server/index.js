const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const key = process.env.KEY;
const router = require("./routes/routes");
const connect = require("../server/db/db");

app.use(express.json());
app.use("/", router);

const start = async () => {
  await connect(key);
  app.listen(port, () => {
    console.log(`server is listening to port ${port}..........`);
  });
};

start();
