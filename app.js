const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Public Folder
app.use(express.static("public"));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/admin/gallery", require("./routes/galleryRoutes"));

app.use("/admin/events", require("./routes/eventRoutes"));

app.use("/rsvp", require("./routes/rsvpRoutes"));

app.use("/admin/rsvp", require("./routes/rsvpRoutes"));

app.use("/admin/guests", require("./routes/guestRoutes"));

app.use("/", require("./routes/websiteRoutes"));

app.use("/admin/dashboard", require("./routes/dashboardRoutes"));
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
    console.log(`http://localhost:${PORT}/`);
});