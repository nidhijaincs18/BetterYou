$('body').on('click', '.add-to-cart ', function() {
    var productName = $(this).closest('.essentials ').find('.produt-name').text();
    var price = $(this).closest('.essentials ').find('.price').text();
    var productImage = $(this).closest('.essentials ').find('.product-image a img').attr("src");


    var existing = localStorage.getItem('cartList');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : [];

    value = { "productImage": productImage, "productName": productName, "price": price }
    var temp = false;
    $(existing).each(function(key, value) {
        if (value.productName == productName) {
            temp = true;
            return false;
        }
    });
    // Add new data to localStorage Array
    if (!temp) {
        existing.push(value);
        console.log(value);
        console.log(existing);
    }

    // Save back to localStorage
    localStorage.setItem('cartList', JSON.stringify(existing));

    JSON.parse(localStorage.getItem("cartList")).length ? $("#cart-len").text(JSON.parse(localStorage.getItem("cartList")).length) : $("#cart-len").text(0);
});


JSON.parse(localStorage.getItem("cartList")).length ? $("#cart-len").text(JSON.parse(localStorage.getItem("cartList")).length) : $("#cart-len").text(0);


// import express from "express";
// import mongoose from "mongoose";
// import passport from "passport";
// import bodyParser from "body-parser";
// import LocalStrategy from "passport-local";
// import passportLocalMongoose from "passport-local-mongoose";
// import User from "./models/user";

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect("mongodb://localhost/auth_app");


// var app = express();
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

// app.use(require("express-session")({
//     secret: "Tom is a Cat",
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// //=====================
// // ROUTES
// //=====================

// // Showing home page
// app.get("/", function(req, res) {
//     res.render("index.html");
// });

// // Showing secret page
// app.get("/home", isLoggedIn, function(req, res) {
//     res.render("/index.html");
// });

// // Showing register form
// app.get("/login/register", function(req, res) {
//     res.render("/login/register.html");
// });

// // Handling user signup
// app.post("/register", function(req, res) {
//     var email = req.body.email
//     var password = req.body.password
//     User.register(new User({ email: email }),
//         password,
//         function(err, user) {
//             if (err) {
//                 console.log(err);
//                 return res.render("/register/register.html");
//             }

//             passport.authenticate("local")(
//                 req, res,
//                 function() {
//                     res.render("secret");
//                 });
//         });
// });

// //Showing login form
// app.get("/login", function(req, res) {
//     res.render("login/login.html");
// });

// //Handling user login
// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/secret",
//     failureRedirect: "/login"
// }), function(req, res) {});

// //Handling user logout 
// app.get("/logout", function(req, res) {
//     req.logout();
//     res.redirect("/");
// });

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }

// var port = process.env.PORT || 3000;
// app.listen(port, function() {
//     console.log("Server Has Started!");
// });