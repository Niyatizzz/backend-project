const asyncHandler = require("express-async-handler") //handle exceptions inside the async express route
//whenever we create api methods create lables like below

//@desc get all contacts
//@route GET /api/contacts
//@access public (for now later on private when we introduce authentication)
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({messege: "get all contacts"});
});

//@desc get contact
//@route GET /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ messege: `get contact for ${req.params.id}` });
});

//@desc create contact
//@route POST /api/contacts
//@access public (for now later on private when we introduce authentication)
const createContact = asyncHandler(async (req, res) => {
    console.log("the request body is:", req.body)
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("all fields are mandotory")
    }
    res.status(200).json({messege: "create contact"});
});

//@desc update put contact
//@route PUT /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const putContact = asyncHandler(async (req, res) => {
    res.status(200).json({ messege: `update contact for ${req.params.id}` });
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ messege: `delete contact for ${req.params.id}` });
});

module.exports = {getContacts, getContact, createContact, putContact, deleteContact}