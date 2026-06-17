const Gallery = require("../models/Gallery");
const Event = require("../models/Event");
const Guest = require("../models/Guest");
const RSVP = require("../models/RSVP");

exports.dashboard = async (req, res) => {

    const galleryCount = await Gallery.countDocuments();

    const eventCount = await Event.countDocuments();

    const guestCount = await Guest.countDocuments();

    const rsvpCount = await RSVP.countDocuments();

   

    res.render("admin/dashboard", {
        galleryCount,
        eventCount,
        guestCount,
        rsvpCount,
      
    });

}