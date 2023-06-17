"use client"

import React, { useState, useEffect } from 'react';

const Tagline = () => {
    const taglines = [
        "Because 'Yes' is Overrated!",
        "No, But Thanks for Playing.",
        "Perfecting the Art of Being Turned Down.",
        "Where 'No' is the New 'Yes'.",
        "The Game Where Winning Means Losing.",
        "It's Not You, It's a 'No'.",
        "Because Who Needs Approval Anyway?",
        "Find Your 'No' Mojo!",
        "Giving 'No' a Standing Ovation.",
        "The Only App Where 'No' Gets You a High Five!",
        "No Way, Or The Highway!",
        "You Never Had a Chance Anyway.",
        "What's the Worst That Could Happen?",
    ];


    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [taglines.length]);

    return (
        <p className="text-xs font-thin">
            {taglines[index]}
        </p>
    );
}

export default Tagline;
