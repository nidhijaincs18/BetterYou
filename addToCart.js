var cartList = JSON.parse(localStorage.getItem('cartList'));

$.each(cartList, function(key, value) {
    doc = '';
    doc += '<div class="item"> <div class="pinfo">';
    doc += '<img src ="' + value.productImage + '" alt="">'

    doc += '<div class="description"> <h3 class="pname">' + value.productName + '</h3>';
    doc += '<h3 class="cost">';
    var temp = value.price.split("Rs.")[1];
    doc += 'Rs. ' + temp + '</h3></div></div>';

    doc += '<div class="quantity"><div class="qty"> <label> QTY: </label> <select name ="qty"> <option value="1" > 1 </option> <option value = "2" > 2 </option> <option value = "3" > 3 </option> <option value = "4" > 4 </option> <option value = "5" > 5 </option> <option value = "6" > 6 </option> <option value = "7" > 7 </option> <option value = "8" > 8</option></select > </div > <button class="delete"> <i class = "far fa-trash-alt" > </i>Remove</button> </div>';

    $('#cart-items').append(doc);
    doc = '';
});

// Displaying the price when cart is first opened
var price = 0;
$("#cart-items").children('.item').each(function() {
    var tempPrice = ($(this).find('.cost').text()).substring(4);
    var quantity = $(this).find('select :selected').val();
    price += parseInt(tempPrice) * parseInt(quantity);
});
console.log(price);
$('#amount').text('Rs. ' + price);
localStorage.setItem("FinalPrice", price);



$('body').on('change', function() {
    price = 0;
    $("#cart-items").children('.item').each(function() {
        var tempPrice = ($(this).find('.cost').text()).substring(4);
        var quantity = $(this).find('select :selected').val();
        price += parseInt(tempPrice) * parseInt(quantity);
    });
    console.log(price);
    $('#amount').text('Rs. ' + price);
    localStorage.setItem("FinalPrice", price);

});
if (cartList.length == 0) {
    $('.payment').css('display', 'none');
    $('#cart-items').css('display', 'none');
    $('.empty-cart').css('display', 'block');
} else {
    $('.payment').css('display', 'flex');
    $('#cart-items').css('display', 'block');
    $('.empty-cart').css('display', 'none');
}

$('body').on('click', '.delete', function() {
    var elementIndex = $(this).closest('.item').index();


    var tempPrice = ($(this).closest('.item').find('.cost').text()).substring(4);
    var quantity = $(this).closest('.item').find('select :selected').val();
    price = price - parseInt(tempPrice) * parseInt(quantity);
    console.log(price);

    $('#amount').text('Rs. ' + price);
    cartList.splice(elementIndex - 1, 1);
    console.log(cartList);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    $(this).closest('.item').remove();
    localStorage.setItem("FinalPrice", price);


    if (cartList.length == 0) {
        $('.payment').css('display', 'none');
        $('#cart-items').css('display', 'none');
        $('.empty-cart').css('display', 'block');
    } else {
        $('.payment').css('display', 'flex');
        $('#cart-items').css('display', 'block');
        $('.empty-cart').css('display', 'none');
    }
});
localStorage.setItem("cartList", JSON.stringify(cartList));
localStorage.setItem("FinalPrice", price);