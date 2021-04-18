$('body').on('click', '.add-to-cart ', function() {
    var productName = $(this).closest('.essentials ').find('.produt-name').text();
    var price = $(this).closest('.essentials ').find('.price').text();
    var productImage = $(this).closest('.essentials ').find('.product-image a img').attr("src");


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