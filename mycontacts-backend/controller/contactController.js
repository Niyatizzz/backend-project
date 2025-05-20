const asyncHandler = require("express-async-handler") //handle exceptions inside the async express route
const Contact = require("../models/contactModel")
//whenever we create api methods create lables like below

//@desc get all contacts
//@route GET /api/contacts
//@access public (for now later on private when we introduce authentication)
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc get contact
//@route GET /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("contact not found")
    }
    res.status(200).json(contact);
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
    const contact = await Contact.create({
        name, email, phone,
    })
    res.status(201).json(contact);
});

//@desc update put contact
//@route PUT /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const putContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("contact not found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedContact);
});

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("contact not found");
    }
    await Contact.remove();
    res.status(200).json(contact);
});

module.exports = {getContacts, getContact, createContact, putContact, deleteContact}