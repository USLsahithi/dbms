const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const url = "mongodb+srv://uslsahithi8:sahi%402004@cluster0.3l5xyjq.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url).then(() => {
    console.log("Database connected!");
});

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    purchasedCycles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cycles'
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    contact: {
        required: true,
        type: String
    },
    admin: {
        type: Boolean
    }
});
const CycleSchema = new mongoose.Schema({
    model: String,
    price: Number,
    color: String,
    booked: Boolean,
    availability: Number

});
const CycleDB = new mongoose.model("cycles", CycleSchema);
const UserDB = new mongoose.model("users", UserSchema);

app.post("/newUser", (req, res) => {
    const data = new UserDB({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        contact: req.body.contact,
        admin: false
    })
    data.save();
    res.redirect(req.get("referer"));
})

app.post("/clogin", (req, res) => {
    UserDB.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            if (user.password === req.body.password) {
                res.render("cdashboard");
            }
            else {
                res.redirect("/");
            }
        }
        else {
            res.redirect("/");
        }
    })
});

app.post("/alogin", (req, res) => {
    UserDB.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            if (user.admin === true) {
                console.log("admin");
                if (user.password === req.body.password) {
                    res.render("admin_dashboard");
                }
                else {
                    res.redirect("/");
                }
            }
            else {
                res.redirect("/");
            }
        }
        else {
            res.redirect("/");
        }
    })
});

app.post("/addCycles", async (req, res) => {
    const newCycle = new CycleDB({
        model: req.body.model,
        color: req.body.color,
        booked: false,
        price: req.body.price,
        availability: req.body.stock
    });
    await newCycle.save();
    res.redirect('/addCycles');
});

app.post("/addToAccount", async (req, res) => {
    await CycleDB.updateOne({ _id: req.body.id }, { $set: { booked: true } });
    res.redirect('/store')
})
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/addCycles", (req, res) => {
    res.render("addCycles");
})

app.get("/store", async (req, res) => {
    const cycles = await CycleDB.find({});
    res.render("store", { cycles: cycles });
})

app.listen(3500, () => {
    console.log("server running");
});