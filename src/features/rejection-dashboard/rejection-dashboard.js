"use client"

import { useSelector } from 'react-redux';
import { selectQuestions } from '././slice/rejection-slice';
import { PlusIcon } from 'lucide-react';
import Fab from '@/components/fab/fab';
import AddQuestionModal from './add-question-modal';
import EditQuestionModal from './edit-question-modal';
import QuestionCard from './question-card';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

const RejectionDashboard = () => {
    const questions = useSelector(selectQuestions);

    return (
        <div>
            <div onClick={() => console.log("hi")} className="px-4 py-6 container relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {questions.map((question) => (
                        <Dialog>
                            <DialogTrigger asChild>
                                <div>
                                    <QuestionCard key={question.id} {...question} />
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <EditQuestionModal id={question.id} />
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <Dialog>
                <DialogTrigger style={{ position: 'fixed', bottom: '150px', right: '150px' }}
                    className="rounded-full bg-primary text-primary-foreground p-4">
                    <Fab tooltip="Add Question">
                        <PlusIcon />
                    </Fab>
                </DialogTrigger>
                <DialogContent>
                    <AddQuestionModal />
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default RejectionDashboard;

