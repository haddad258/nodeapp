const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const GridFSStorage = require("multer-gridfs-storage");
const multer = require("multer");

//mongoose.Promise = global.Promise;

const app = express();
const port = 4525;

// Allows cross-origin domains to access this API
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Content-Length, Content-Length,Content-Range, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/flashtool", { useNewUrlParser: true });
const conn = mongoose.connection;

conn.on("error", console.error.bind(console, "connection error:"));

conn.once("open", () => {
  console.log("Successfully connected to mongoDB!");

  const storage = new GridFSStorage({
    db: conn,
    file: (req, file) => {
      return {
        filename: file.originalname
      };
    }
  });

  const upload = multer({ storage: storage });
  const bucket = new mongoose.mongo.GridFSBucket(conn.db);

  storage.on("file", file => {
    console.log("A new file was uploaded!");
  });

  app.get("/", (req, res) => {
    res.render("index");
  });



  


  app.post("/ipmac",function(req,res){
   
console.log(req.body)
       res.json("ok")
  });

  

  
  app.listen(port, () => {
    console.log(`Flash-tool server listening on port ${port}!`);
  });
});
