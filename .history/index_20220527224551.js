const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); 

app.get("/api/users", (req, res) => {
   let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    // let friends = 2+2

  res.status(200).send(friends);
});


app.get("/api/quest", (req, res) => {
  let friends = ["NiNitinNitintin", "NitinNitin", "NitinNitin", "NitinNitin", "NitinNitin"];
  res.status(200).send(friends);
});

app.get("/api/questions", (req, res) => {
  let friends = ["NiNitinNitintin", "NitinNitin", "NitinNitin", "NitinNitin", "NitinNitin"];
  res.status(200).send(friends);
});


app.get("/weather/:temperature", (req, res) => {
  const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
  res.status(200).send(phrase);
});

app.listen(4000, () => console.log("Server running on 4000"));