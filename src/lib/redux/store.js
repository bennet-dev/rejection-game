"use client"

import { configureStore } from "@reduxjs/toolkit";
import questions from "@/features/rejection-dashboard/slice/rejection-slice";

export const store = configureStore({
    reducer: {
        questions
    },
});