const express = require("express");
const router = express.Router();
const Data = require("../Models/Data");

router.post("/data", async (req, res) => {
  console.log("data");
  const data = req.body.data;
  console.log(data);
  try {
    await Data.create({
      data: data,
    }).then(console.log("data inserted"));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
