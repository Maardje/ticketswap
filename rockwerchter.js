var Nightmare = require('nightmare');

const koophet = () => {
    var nightmare = Nightmare({ show: true, waitTimeout:10000000 })
    nightmare
        .goto('https://www.ticketswap.nl/event/rock-werchter-festival-2017/4-day-ticket/23b907de-1dff-4701-b346-d48b85b02aed/56911')
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
        .goto('https://www.ticketswap.nl/event/rock-werchter-festival-2017/4-day-ticket/23b907de-1dff-4701-b346-d48b85b02aed/56911')
        .wait(500)
        .evaluate(function () {
            return document.querySelector("div.counter.counter-available div.counter-value").innerText
        })
        .end()
        .then(function (result) {
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