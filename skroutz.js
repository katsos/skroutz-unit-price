window.onload = () => {
    const productCards = Array.from(document.querySelectorAll('.cf.card'));
    for(const p of productCards) {
        const titleElem = p.querySelector('.js-sku-link');
        const title = titleElem.title;
        console.log(title);
    }
};