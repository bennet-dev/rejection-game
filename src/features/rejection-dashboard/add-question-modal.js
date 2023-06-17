import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createQuestion } from './slice/rejection-slice';

const AddQuestionModal = () => {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState('');
    const [askee, setAskee] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createQuestion({ question, askee, status }));
    };

    return (
        <div >
            <div >
                <h2 className="text-xl font-semibold mb-4 text-popover-foreground">Add a new question</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="question" className="block text-sm text-muted mb-2">Question:</label>
                        <input id="question" value={question} onChange={(e) => setQuestion(e.target.value)} type="text" className="w-full px-3 py-2 border border-border rounded-md text-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="askee" className="block text-sm text-muted mb-2">Askee:</label>
                        <input id="askee" value={askee} onChange={(e) => setAskee(e.target.value)} type="text" className="w-full px-3 py-2 border border-border rounded-md text-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="status" className="block text-sm text-muted mb-2">Status:</label>
                        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full px-3 py-2 border border-border rounded-md text-input">
                            <option value="">Select status</option>
                            <option value="Accepted">Accepted</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Unanswered">Unanswered</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg">Add question</button>
                </form>
            </div>
        </div>
    );
};

export default AddQuestionModal;

