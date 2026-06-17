const Gallery = require("../models/Gallery");
const Event = require("../models/Event");

exports.home = async (req, res) => {

    try {

        const gallery = await Gallery.find();

        const events = await Event.find().limit(2);;

        res.render("website/home", {
            gallery,
            events
        });

    } catch (error) {

        console.log(error);

        res.render("website/home", {
            gallery: [],
            events: []
        });

    }

};

exports.about = (req, res) => {
    res.render("website/about");
}

exports.gallery = (req, res) => {
    res.render("website/gallery");
}

exports.services = (req, res) => {
    res.render("website/services");
}

exports.contact = (req, res) => {
    res.render("website/contact");
}