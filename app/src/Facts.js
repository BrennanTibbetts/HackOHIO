import React, { useState, useEffect } from 'react';

const Fact = () => {
    const facts = [
        "Agriculture uses up 70% of our global freshwater. It goes up to 90% in fast-developing countries.",
        "The US makes up only 5% of the world population, but it throws away enough plastic bottles in a week to encircle the Earth 5 times!",
        "The average college student produces 640 pounds of solid waste each year, including 500 disposable cups and 320 pounds of paper.",
        "The five warmest years on record have occurred in the last decade.",
        "Transportation and housing make up about 60% of the carbon footprint of US households. This is due to the fuels used for transportation and to heat, cool and power our homes.",
        "Only 1% of the earth's water is available for drinking water. Two percent is frozen.",
        "Every day in the United States, we drink about 110 million gallons of water.",
        "Showering and bathing are the largest indoor uses (27%) of water domestically.",
        "Scientists predict that if the increase in greenhouse gas emissions continues unabated, temperatures will rise by as much as 10 degrees Fahrenheit by the end of this century.",
        "Recycling one aluminum can save enough energy to run a TV for three hours.",
        "Up to 90% of the energy used during a washing machine’s cleaning cycle goes into heating the water, so use the cold setting.",
        "Rainforests are being cut down at the rate of 100 acres per minute.",
        "To avoid flying, Greta Thunberg sailed to North America from Sweden where she attended the 2019 UN Climate Action Summit.",
        "A hot water faucet that leaks one drop per second can add up to 165 gallons a month. That's more than one person uses in two weeks.",
        "Heating, ventilating and air conditioning systems account for 40-60 percent of total energy use in the commercial sector.",
        "In the United States, more than 40 percent of municipal solid waste is paper -- about 71.8 tons a year."
    ];

    const [randomFact, setRandomFact] = useState(facts[0]);
    const [factIndex, setFactIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Generate a new random index and fact
            const newIndex = Math.floor(Math.random() * facts.length);
            setRandomFact(facts[newIndex]);
            setFactIndex(newIndex);
        }, 10000); // 10000 milliseconds = 10 seconds

        return () => {
            clearInterval(interval); // Clean up the interval when the component unmounts
        };
    }, [facts]);

    return (
        <div>
            <h2>Random Fact</h2>
            <p>{randomFact}</p>
        </div>
    );
};

export default Fact;

