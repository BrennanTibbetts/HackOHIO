import React, { useState, useEffect } from 'react';

const Fact = () => {
    const facts = [
        "LED is currently one of the most efficient and rapidly developing lighting technologies.",
        "Residential LEDs use 25% of the electricity of incandescent bulbs and last up to 25 times longer.",
        "LEDs emit almost no energy as heat – in contrast, incandescent bulbs release 90% of their energy as heat, and compact fluorescent lights (CFLs) release up to 80% of their energy as heat.",
        "LED products are currently not as widely available or inexpensive as CFLs or incandescent bulbs but are becoming more so all the time.",
        "Less than 2% of the Earth’s water supply is fresh water.",
        "Only 1% of the earth's water is available for drinking water. Two percent is frozen.",
        "Every day in the United States, we drink about 110 million gallons of water.",
        "Showering and bathing are the largest indoor uses (27%) of water domestically."
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
