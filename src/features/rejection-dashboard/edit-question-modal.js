import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectQuestion, updateQuestion, deleteQuestion } from './slice/rejection-slice';
import { Button } from '@/components/ui/button';

const EditQuestionModal = ({ id }) => {
    const dispatch = useDispatch();
    const selectedQuestion = useSelector(state => selectQuestion(state, id));

    const [question, setQuestion] = useState('');
    const [askee, setAskee] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (selectedQuestion) {
            setQuestion(selectedQuestion.question);
            setAskee(selectedQuestion.askee);
            setStatus(selectedQuestion.status);
        }
    }, [selectedQuestion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateQuestion({ id, question, askee, status }));
    };

    const handleDelete = () => {
        dispatch(deleteQuestion(id));
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-popover-foreground">Edit question</h2>
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
                <button type="submit" className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-lg">Edit question</button>
            </form>
            <button onClick={handleDelete} className="w-full py-2 px-4 bg-secondary text-secondary-foreground rounded-lg mt-2">Delete</button>
        </div>
    );
};

export default EditQuestionModal;
