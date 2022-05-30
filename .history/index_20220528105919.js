const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); 

app.get("/api/users", (req, res) => {
   let lifespan = ["Your lifespan: 1 year", "Your lifespan: 5 years", "Your lifespan: 10 years",
  "Your lifespan: 40 year","Your lifespan: 60 year","Your lifespan:  year"];
    // let friends = 2+2

  res.status(200).send(lifespan);
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