"use client"

import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const questionsSlice = createSlice({
    name: 'questions',
    initialState: [],
    reducers: {
        createQuestion: (state, action) => {
            const { question, askee, status } = action.payload;
            state.push({
                id: uuidv4(),
                timestamp: Date.now(),
                question,
                askee,
                status
            });
        },
        deleteQuestion: (state, action) => {
            const index = state.findIndex(question => question.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        updateQuestion: (state, action) => {
            const index = state.findIndex(question => question.id === action.payload.id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    ...action.payload
                };
            }
        },
        duplicateQuestion: (state, action) => {
            const question = state.find(question => question.id === action.payload);
            if (question) {
                state.push({
                    ...question,
                    id: uuidv4(), // Generating new id for duplicated question
                    timestamp: Date.now() // Updating timestamp for duplicated question
                });
            }
        }
    }
});

// Exporting actions
export const { createQuestion, deleteQuestion, updateQuestion, duplicateQuestion } = questionsSlice.actions;

// Reducer
export default questionsSlice.reducer;

// Selectors
export const selectQuestions = state => state.questions;
export const selectQuestion = (state, id) => state.questions.find(question => question.id === id);
