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
    const titleElem = cardElem.querySelector('.js-sku-link');
    const title = titleElem.title;
    const { unit, size } = getSizeUnitOfMeasurement(title);

    return { title, unit, size };
}

function getSizeUnitOfMeasurement(title) {
    for(const unit of SUPPORTED_MEAS_UNITS) {
        const matches = new RegExp(`^.*\\s+(\\d*${unit})(?:\\s|$)`, 'i').exec(title);
        if (!matches || !matches.length) continue;
        return { size: matches[1].split(unit)[0], unit };
    }
    return {};
}