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