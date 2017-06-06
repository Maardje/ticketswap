var Nightmare = require('nightmare');

const koophet = () => {
    var nightmare = Nightmare({ show: true, waitTimeout:10000000 })
    nightmare
        .goto('https://www.ticketswap.nl/event/georgies-wundergarten-2017/saturday/6b78234b-6dbf-43c6-9634-d4e083aff39a/153959')
        .click('div.listings-item--title a[itemprop=offerurl]')
        .wait(200)
        .click('input[type=submit]')
        .wait(3000000)
        .evaluate(() => {
            return
        }).end().then().catch()
}



const scrape = () => {
    var nightmare = Nightmare({ show: false });
    nightmare
        .goto('https://www.ticketswap.nl/event/georgies-wundergarten-2017/saturday/6b78234b-6dbf-43c6-9634-d4e083aff39a/153959')
        .wait(500)
        .evaluate(function () {
            return document.querySelector("div.counter.counter-available div.counter-value").innerText
        })
        .end()
        .then(function (result) {
            console.log('jemoeder')
            let resultInt = parseInt(result);
            console.log(resultInt)
            if (resultInt > 0) {
                koophet();
            }
        })
        .catch(function (error) {
            console.error('Search failed:', error);
        });
}

setInterval(scrape, 3000)

// koophet();