const Guest = require("../models/Guest");

// Show All Guests
exports.index = async(req,res)=>{

    const guests = await Guest.find();

    res.render("admin/guests/index",{
        guests
    });

}

// Add Form
exports.create = (req,res)=>{

    res.render("admin/guests/add");

}

// Store Guest
exports.store = async(req,res)=>{

    await Guest.create({

        name:req.body.name,
        phone:req.body.phone,
        relation:req.body.relation,
        tableNo:req.body.tableNo

    });

    res.redirect("/admin/guests");

}

// Edit Form
exports.edit = async(req,res)=>{

    const guest = await Guest.findById(req.params.id);

    res.render("admin/guests/edit",{
        guest
    });

}

// Update Guest
exports.update = async(req,res)=>{

    await Guest.findByIdAndUpdate(req.params.id,{

        name:req.body.name,
        phone:req.body.phone,
        relation:req.body.relation,
        tableNo:req.body.tableNo

    });

    res.redirect("/admin/guests");

}

// Delete Guest
exports.delete = async(req,res)=>{

    await Guest.findByIdAndDelete(req.params.id);

    res.redirect("/admin/guests");

}