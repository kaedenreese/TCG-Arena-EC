async function updatePower() {
    console.log(game, cards);
    const sectionCards = cards.Frontline;
    let totalPower = 0;

    if(sectionCards === undefined) return;
    
    for(let i = 0; i < sectionCards.length; i++) {
        const card = sectionCards[i];
        const power = card.Power;
        totalPower += power;
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