const SUPPORTED_MEAS_UNITS = ['ml', 'gr'];

window.onload = () => {
    const productCards = Array.from(document.querySelectorAll('.cf.card'));
    for(const p of productCards) {
        const titleElem = p.querySelector('.js-sku-link');
        const title = titleElem.title;
        console.log(title);

        for(const m of SUPPORTED_MEAS_UNITS) {
            const matches = new RegExp(`^.*\\s+(\\d*${m})(?:\\s|$)`, 'i').exec(title);
            if (matches && matches.length) {
                console.log(matches[1]);
                break;
            }
        }
    }
};