const Contact = require('../Models/contactModele');
const catchAsync = require('../utils/catchAsync');

exports.createContact = catchAsync(async (req, res) => {
  const newContact = await Contact.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    number: req.body.number,
  });

  res.status(201).json({
    status: 'success',
    data: {
      contact: newContact,
    },
  });
});

exports.getAllContacts = catchAsync(async (req, res) => {
  const contacts = await Contact.find().sort('-createdAt');

  res.status(200).json({
    status: 'success',
    results: contacts.length,
    data: {
      contacts,
    },
  });
});

exports.getContact = catchAsync(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      status: 'fail',
      message: 'Contact not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      contact,
    },
  });
});

exports.deleteContact = catchAsync(async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
