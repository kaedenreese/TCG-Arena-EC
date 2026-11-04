async function updatePower() {
    console.log(cards);
    const sectionCards = cards.Frontline;
    let totalPower = 0;

    if(sectionCards === undefined) return;
    
    for(let i = 0; i < sectionCards.length; i++) {
        console.log(sectionCards[i]);
        const card = sectionCards[i];
        const power = card.cardData.Power;
        totalPower += power;
        const counters = card.counters;
        if(counters[0].value != undefined && counters[0].value != null) {
            totalPower += counters[0].value;
        }
        if(counters[1].value != undefined && counters[1].value != null) {
            totalPower += counters[1].value;
        }
    }
    console.log(totalPower);
    /*let totalPower = 0;
    cards.forEach((card) => {
        const cardData = functions.getCardData(card);
        // Tally the totals
        totalPower += cardData.Power;
    });*/
    game.data.Power.power = totalPower;
}