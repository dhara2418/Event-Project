const Gallery = require("../models/Gallery");

exports.index = async(req,res)=>{

const gallery = await Gallery.find();

res.render("admin/gallery/index",{
gallery
});

}

exports.create = (req,res)=>{

res.render("admin/gallery/add");

}

exports.store = async(req,res)=>{

await Gallery.create({

title:req.body.title,

image:req.file.filename

});

res.redirect("/admin/gallery");

}

exports.edit = async(req,res)=>{

const gallery = await Gallery.findById(req.params.id);

res.render("admin/gallery/edit",{
gallery
});

}

exports.update = async(req,res)=>{

await Gallery.findByIdAndUpdate(req.params.id,{

title:req.body.title

});

res.redirect("/admin/gallery");

}

exports.delete = async(req,res)=>{

await Gallery.findByIdAndDelete(req.params.id);

res.redirect("/admin/gallery");

}