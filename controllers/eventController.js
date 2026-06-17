const Event = require("../models/Event");

// Show All Events
exports.index = async (req, res) => {

    const events = await Event.find();

    res.render("admin/events/index", {
        events
    });

};

// Add Form
exports.create = (req, res) => {

    res.render("admin/events/add");

};

// Store Event
exports.store = async (req, res) => {

    await Event.create({
        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description
    });

    res.redirect("/admin/events");

};

// Edit Form
exports.edit = async (req, res) => {

    const event = await Event.findById(req.params.id);

    res.render("admin/events/edit", {
        event
    });

};

// Update Event
exports.update = async (req, res) => {

    await Event.findByIdAndUpdate(req.params.id, {

        title: req.body.title,
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        description: req.body.description

    });

    res.redirect("/admin/events");

};

// Delete Event
exports.delete = async (req, res) => {

    await Event.findByIdAndDelete(req.params.id);

    res.redirect("/admin/events");

};