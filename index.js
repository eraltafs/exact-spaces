const express = require("express");
const cors = require("cors")

const port = 3000;
const app = express();

app.use(cors())
app.use(express.json());

// post api for sending json 
app.post("/submit", (req, res) => {
  const submittedJson = req.body;
  res.json(submittedJson);
});


// litening to server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
