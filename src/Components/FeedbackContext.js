import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext()

function FeedbackProvider({ children }) {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is Feedback 1",
            rating: 10
        },
        {
            id: 2,
            text: "This is Feedback 2",
            rating: 8
        },
        {
            id: 3,
            text: "This is Feedback 3",
            rating: 9
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id != id));
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log("Add", newFeedback);
        setFeedback([newFeedback, ...feedback]);
    }
    const updateFeedback = (id,updItm) => { 
        setFeedback(feedback.map((item) => (item.id === id ? updItm : item)))
    }
    
    return (
        <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback ,editFeedback,feedbackEdit,updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackProvider;
