const express = require('express')
const router = express.Router()
//configure the route

//get - fetching data

router.route("/").get((req, res) => {
  // res.send("get all contacts")
  res.json({ messege: "get all contacts" });
});

router.route("/:id").get((req, res) => {
  // res.send("get all contacts")
  res.json({ messege: `get contact for ${req.params.id}` });
});

//post - creating

router.route("/").post((req, res) => {
  // res.send("get all contacts")
  res.json({ messege: "create contact" });
});

//put - updating

router.route("/:id").put((req, res) => {
  // res.send("get all contacts")
  res.json({ messege: `update contact for ${req.params.id}`});
});

//delete - remove tht id

router.route("/:id").delete((req, res) => {
  // res.send("get all contacts")
  res.json({ messege: `delete contact for ${req.params.id}` });
});

module.exports = router