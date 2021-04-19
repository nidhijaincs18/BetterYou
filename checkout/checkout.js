$("#bbtn").on('click', function(e) {
    e.preventDefault();
    var userData = {
        "firstName": $("#firstName").val(),
        "lastName": $("#lastName").val(),
        "email": $("#email").val(),
        "address": $("#address").val(),
        "country": $("#country").val(),
        "state": $("#state").val(),
        "pin": $("#pin").val(),
        "cc-name": $("#name").val(),
        "cc-number": $("#number").val(),
    }
    console.log(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = 'invoice.html';
});

$("#amount span").text("Rs. " + localStorage.getItem("FinalPrice"))