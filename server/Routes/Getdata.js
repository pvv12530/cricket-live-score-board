const express = require("express");
const router = express.Router();
const Data = require("../Models/Data");

router.post("/data", async (req, res) => {
  try {
    await Data.find()
      .then(async (data) => {
        console.log(data);
        res.send(data);
      })
      .then(console.log("data sent"));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
