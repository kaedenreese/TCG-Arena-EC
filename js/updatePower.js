async function updatePower() {
    const sectionCards = cards.Frontline;
    let totalPower = 0;
    cards.forEach((card) => {
        const cardData = functions.getCardData(card);
        // Tally the totals
        totalPower += cardData.Power;
    });
    game.data.Power.power = totalPower;
}