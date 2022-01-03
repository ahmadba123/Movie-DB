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
//step4
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


const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب", year: 1992, rating: 6.2 },
];

// Add movie

app.get("/movies/add", (req, res) => {});

// Get movie

app.get("/movies/get", (req, res) => {
  res.send({
    status: 200,
    data: movies,
  });
});

// Edit movie

app.get("/movies/edit", (req, res) => {});

// Delete movie

app.get("/movies/delete", (req, res) => {});
//by date
app.get("/movies/read/by-date", (req, res) => {
  res.send ({
    status: 200,
    data: movies.sort((a,b) => {
      return a.year - b.year;
    }),
  })
})
// by rating
app.get("/movies/read/by-rating", (req, res) => {
  res.send ({
    status: 200,
    data: movies.sort((a,b) => {
      return b.rating - a.rating;
    }),
  })
})
//by title
app.get("/movies/read/by-title", (req, res) => {
  res.send ({
    status: 200,
    data: movies.sort((a,b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }),
  })
})