import { format } from 'date-fns';

const QuestionCard = ({ id, timestamp, question, askee, status }) => {
    return (
        <div className="bg-card rounded-lg shadow-md p-4 my-2 sm:my-4 md:my-6 cursor-pointer"
            style={{ cursor: "pointer" }}
        >
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">{question}</h2>
            <p className="text-sm text-muted mb-2">Asked to: {askee}</p>
            <p className="text-sm text-muted mb-2">Status: {status}</p>
            <p className="text-xs text-muted">Posted on: {format(new Date(timestamp), 'dd MMM yyyy')}</p>
        </div>
    );
};

export default QuestionCard;