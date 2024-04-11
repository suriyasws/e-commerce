const express = require("express");
const app = express();
const path = require("path");
const dotenv= require("dotenv").config();
const logger = require ('./utils/logger');
const db = require ('./db');
const cors= require ('cors');
const router1= require ('./routes/router1');
const router2= require ('./routes/striperoute');
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use((req,res,next)=>{
  console.log(req.url);
  next();
})

app.use(router1);
app.use(router2);

app.use((err, req, res, next) => {
  logger.error(err.message);
  console.error(err.message);
  res.status(500).send(err);
});

app.listen(process.env.PORT , () => {
  db();
  console.log(`Server is running on port ${process.env.PORT}`);
});
