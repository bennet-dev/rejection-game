"use client"
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectQuestions } from '@/features/rejection-dashboard/slice/rejection-slice';

const ScoreBoard = () => {
    const questions = useSelector(selectQuestions);

    // Define the point schema
    const pointSchema = {
        Accepted: 1,
        Rejected: 10,
        Unanswered: 0
    };

    // Initialize the points
    const [points, setPoints] = useState({
        Accepted: 0,
        Rejected: 0,
        Unanswered: 0
    });

    // Calculate points based on question status
    useEffect(() => {
        let newPoints = {
            Accepted: 0,
            Rejected: 0,
            Unanswered: 0
        };
        questions.forEach(question => {
            newPoints[question.status] += pointSchema[question.status];
        });
        setPoints(newPoints);
    }, [questions]);
    // Render the scoreboard
    return (
        <div className='max-w-sm ' >
            <div className="grid grid-cols-3 ">
                <div className="text-center">
                    <div className="text-sm">Accepted</div>
                    <div>{points.Accepted}</div>
                </div>
                <div className="text-center">
                    <div className="text-sm">Rejected</div>
                    <div>{points.Rejected}</div>
                </div>
                <div className="text-center">
                    <div className="text-sm">Unanswered</div>
                    <div>{points.Unanswered}</div>
                </div>
            </div>
        </div>
    );

};

export default ScoreBoard;
