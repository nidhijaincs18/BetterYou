$("#name").text(JSON.parse(localStorage.getItem("userData")).firstName);
var fullDate = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = fullDate.getDate() + " " + monthNames[fullDate.getMonth()] + " " + fullDate.getFullYear();

$("#date").text(currentDate);

$("#location").text(JSON.parse(localStorage.getItem("userData")).state);

$("#price").text("Rs. " + localStorage.getItem("FinalPrice"));
$("#total").text("Rs. " + (parseInt(localStorage.getItem("FinalPrice")) + 45 + 30));
$(".expected h3").text((fullDate.getDate() + 3) + " " + monthNames[fullDate.getMonth()] + " " + fullDate.getFullYear())