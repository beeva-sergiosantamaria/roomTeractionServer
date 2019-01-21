Contact = require('../modelos/newUser');

exports.index = function (req, res) {
    Contact.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

exports.new = function (req, res) {
    var contact = new Contact();
    contact.testerName = req.body.testerName ? req.body.testerName : "sergio";
    contact.userName = req.body.userName ? req.body.userName : "luisaBot";
    contact.userBirthDate = req.body.userBirthDate ? req.body.userBirthDate : "30/04/1980";
    contact.userGender = req.body.userGender ? req.body.userGender : "female";
    contact.currentDate = req.body.currentDate ? req.body.currentDate : "female";
    contact.experimentDuration = req.body.experimentDuration ? req.body.experimentDuration : "female";
    contact.roomOfexperiment = req.body.roomOfexperiment ? req.body.roomOfexperiment : "female";
    contact.experiment = req.body.experiment ? req.body.experiment : "female";
    console.log(req.body);
    contact.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

exports.view = function (req, res) {
    Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: contact
        });
    });
};

exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        /*contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;*/

        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};

exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};