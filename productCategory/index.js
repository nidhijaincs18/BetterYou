let indicator = document.querySelector('.indicator').children;
let cards = document.querySelector('.card-section').children;

for (let i = 0; i < indicator.length; i++) {
    indicator[i].onclick = function() {
        for (let x = 0; x < indicator.length; x++) {
            indicator[x].classList.remove('active');
        }
        this.classList.add('active');
        const displayItems = this.getAttribute('data-filter');
        for (let z = 0; z < cards.length; z++) {
            cards[z].style.transform = 'scale(0)';
            setTimeout(() => {
                cards[z].style.display = 'none';
            }, 500);

            if (cards[z].getAttribute('data-category') == displayItems || displayItems == "all") {
                cards[z].style.transform = 'scale(1)';
                setTimeout(() => {
                    cards[z].style.display = 'block';
                }, 500);
            }
        }
    }
}

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


});