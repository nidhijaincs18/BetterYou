// $(document).ready(function() {

//     $.getJSON("jsonFiles/immunityBoosters.json", function(data) {
//         var doc = '';
//         // var count = 1;
//         $.each(data, function(key, value) {

//             doc += '<div class="card-layout">';

//             doc += '<div class="product-image"><a href=""><img src="' + value.productImage + '" alt=""></a></div>';

//             doc += '<h4 class="produt-name">' + value.company + "" + value.productname + '</h4>';

//             doc += '<h3 class="price"><span>' +
//                 value.price + '</span>';
//             if (value.actualPrice != "") {
//                 doc += '<del>' + value.actualPrice + '</del>';
//             }
//             doc += '</h3>';

//             doc += '<button class="add-to-cart">Add To Cart</button>';

//             doc += '</div>';

//             $('#card-section').append(doc);
//             doc = '';
//         });
//     });
// });


$('body').on('click', '.add-to-cart ', function() {
    var productName = $(this).closest('.card-layout ').find('.produt-name').text();
    var price = $(this).closest('.card-layout ').find('.price').text();
    var productImage = $(this).closest('.card-layout ').find('.product-image a img').attr("src");


    var existing = localStorage.getItem('cartList');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : [];

    value = { "productImage": productImage, "productName": productName, "price": price }

    // Add new data to localStorage Array
    existing.push(value);
    console.log(value);
    console.log(existing);

    // Save back to localStorage
    localStorage.setItem('cartList', JSON.stringify(existing));

    JSON.parse(localStorage.getItem("cartList")).length ? $("#cart-len").text(JSON.parse(localStorage.getItem("cartList")).length) : $("#cart-len").text(0);
});


JSON.parse(localStorage.getItem("cartList")).length ? $("#cart-len").text(JSON.parse(localStorage.getItem("cartList")).length) : $("#cart-len").text(0);