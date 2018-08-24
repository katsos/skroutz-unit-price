const SUPPORTED_MEAS_UNITS = ['ml', 'gr'];

window.onload = () => {
    const productCards = getProductCards();
    const products = productCards.map(getCardParsed);
    console.log(products);
};

function getProductCards() {
    return Array.from(document.querySelectorAll('.cf.card'));
}

function getCardParsed(cardElem) {
    const priceElem = cardElem.querySelector('.product-link');
    const title = priceElem.title;
    const { unit, size } = getSizeUnitOfMeasurement(title);
    const price = getPrice(priceElem);
    const pricePerUnit = price / size;
    return { title, unit, size, price, pricePerUnit };
}

function getSizeUnitOfMeasurement(title) {
    for(const unit of SUPPORTED_MEAS_UNITS) {
        const matches = new RegExp(`^.*\\s+(\\d*${unit})(?:\\s|$)`, 'i').exec(title);
        if (!matches || !matches.length) continue;
        return { size: matches[1].split(unit)[0], unit };
    }
    return {};
}

function getPrice(elem) {
    const string = elem.innerText
        .split(' €')[0]
        .replace(',', '.');
    return parseFloat(string);
}