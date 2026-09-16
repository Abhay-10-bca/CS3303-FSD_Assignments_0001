const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.render("profile", {
        name: "Abhay M Biju",
        email: "abhay@gmail.com",
        image: "/person.jpg"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});