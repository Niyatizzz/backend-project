const express = require('express')
const router = express.Router()
//configure the route

const {getContacts, getContact, createContact, putContact, deleteContact} = require("../controller/contactController")

//get - fetching data

// router.route("/").get((req, res) => {
//   // res.send("get all contacts")
//   res.json({ messege: "get all contacts" });
// });  instead of this use 

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(putContact).delete(deleteContact);

//post - creating

// router.route("/").post(createContact); instead of this combine into one - common route

//put - updating

// router.route("/:id").put(putContact);

//delete - remove tht id

// router.route("/:id").delete(deleteContact);

module.exports = router