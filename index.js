const { response } = require('express')
const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('ok')

})

app.get("/test", (req, res) => {
  res.send({
    status: 200,
    message: "ok",
  });
});

let edate = new Date();

app.get("/time", (req, res) => {
  res.send({
    status: 200,
    message: edate.getHours() + ":" + edate.getSeconds(),
  });
});
//step5
app.get(["/hello", "/hello/:id"], (req, res) => {
  msg = "hello";
  if (typeof req.params.id != "undefined") { msg += ", " + req.params.id; }
  res.send({
    status: 200,
    message: msg

  });
});

app.get("/search", (req, res) => {
  let resObj;
  if(typeof req.query.s == "undefined" || req.query.s == ""){
    resObj={
      status: 500,
      error: true,
      message: "you have to provide a search"
    }
  }else{
    resObj={
      status: 200,
      message: "ok",
      data: req.query.s
    }
  }
  res.send(resObj);
});

app.listen(port, () => console.log(`the server started at http://localhost:${port} `
))
