const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); 

app.get("/api/users", (req, res) => {
   let friends = ["Hello","Hi","How are you", "I am fine "]
    // let friends = 2+2

  res.status(200).send(friends);
});


app.get("/api/quest", (req, res) => {
  let friends = ["NiNitinNitintin", "NitinNitin", "NitinNitin", "NitinNitin", "NitinNitin"];
  res.status(200).send(friends);
});

app.get("/api/quiz", (req, res) => {
  let friends = ["NiNitinNitintin", "NitinNitin", "NitinNitin", "NitinNitin", "NitinNitin"];
  res.status(200).send(friends);
});



app.listen(4000, () => console.log("Server running on 4000"));