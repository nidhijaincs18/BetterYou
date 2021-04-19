$('body').on('click', '.add-to-cart ', function() {
    var productName = $(this).closest('.card-layout ').find('.product-name').text();
    var price = $(this).closest('.card-layout ').find('.price').text();
    var productImage = $(this).closest('.card-layout ').find('.product-image a img').attr("src");


    var existing = localStorage.getItem('cartList');

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? JSON.parse(existing) : [];

    value = { "productImage": productImage, "productName": productName, "price": price };

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