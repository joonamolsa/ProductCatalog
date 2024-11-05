document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.product-card h2').forEach(function (element) {

        element.textContent = element.textContent.replace(/\b\w/g, function (char) {

            return char.toUpperCase();

        });

    });

    document.querySelectorAll('.product-card p:nth-child(4)').forEach(function (element) {

        // Hae hintateksti ja poista ylimääräiset merkit
        let priceText = element.textContent.replace('Price: ', '').replace(' €', '');

        // Käännä teksti luvuksi. Käytä pilkun sijaan pistettä.
        let price = parseFloat(priceText.replace(',', '.'));

        if (!isNaN(price)) {
            element.textContent = `Price: ${price.toFixed(2).replace('.', ',')} €`;
        } else {
            console.error("Price parsing failed:", priceText);
        }

    });

});
