const RSVP = require("../models/RSVP");

// Website Form Submit

exports.store = async(req,res)=>{

    await RSVP.create({

        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        guests:req.body.guests,
        attend:req.body.attend

    });

    res.redirect("/");
}

// Admin List

exports.index = async(req,res)=>{

    const rsvps = await RSVP.find();

    res.render("admin/rsvp/index",{
        rsvps
    });

}

// Delete RSVP

exports.delete = async(req,res)=>{

    await RSVP.findByIdAndDelete(req.params.id);

    res.redirect("/admin/rsvp");

}