const express = require("express");
const bodyParser = require("body-parser");

const port = 8080;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/ordenaLista", (req, res) => {
  let data = req.body;
  if (data["lista"]) {
    if (data["lista"]["salaN"]) {
      data["salaN"].sort();
    }
    if (data["lista"]["salaS"]) {
      data["salaS"].sort();
    }
  }
  res.send(data);
});

app.get("/interlace", (req, res) => {
  const { intervaloA: intervaloA, intervaloB: intervaloB } = req.body;

  if (intervaloA[0] >= intervaloB[0] && intervaloA[1] <= intervaloB[1]) {
    res.send(true);
  } else if (intervaloA[0] <= intervaloB[0] && intervaloA[1] >= intervaloB[1]) {
    res.send(true);
  } else if (intervaloA[0] <= intervaloB[1] && intervaloA[1] >= intervaloB[0]) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(port, () => {
  console.log("Server stars: http://localhost:8080");
});
