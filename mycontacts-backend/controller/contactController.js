//whenever we create api methods create lables like below

//@desc get all contacts
//@route GET /api/contacts
//@access public (for now later on private when we introduce authentication)
const getContacts = (req, res) => {
    res.status(200).json({messege: "get all contacts"});
};

//@desc get contact
//@route GET /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const getContact = (req, res) => {
    res.status(200).json({ messege: `get contact for ${req.params.id}` });
};

//@desc create contact
//@route POST /api/contacts
//@access public (for now later on private when we introduce authentication)
const createContact = (req, res) => {
    res.status(200).json({messege: "create contact"});
};

//@desc update put contact
//@route PUT /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const putContact = (req, res) => {
    res.status(200).json({ messege: `update contact for ${req.params.id}` });
};

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public (for now later on private when we introduce authentication)
const deleteContact = (req, res) => {
    res.status(200).json({ messege: `delete contact for ${req.params.id}` });
};

module.exports = {getContacts, getContact, createContact, putContact, deleteContact}