import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();

        // Trim and update state values
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPhone = phone.trim();
        const trimmedMessage = message.trim();

        setName(trimmedName);
        setEmail(trimmedEmail);
        setPhone(trimmedPhone);
        setMessage(trimmedMessage);

        if (trimmedName === '') {
            toast.error('Please provide a valid name');
            return;
        }
        if (trimmedEmail === '') {
            toast.error('Please provide a valid email');
            return;
        }
        if (trimmedPhone === '' || trimmedPhone.length !== 10 || isNaN(trimmedPhone)) {
            toast.error('Please provide a valid phone number');
            return;
        }
        if (trimmedMessage === '') {
            toast.error('Message cannot be empty');
            return;
        }

        // Simulate submission
        setSubmitting(true);
        setTimeout(() => {
            console.log(trimmedName);
            console.log(trimmedEmail);
            console.log(trimmedPhone);
            console.log(trimmedMessage);
            toast.success('Thanks for the feedback');
            setSubmitting(false);
            // Clear form after submission
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }, 2000);
    };

    return (
        <AppContext.Provider value={{
            name, setName, email, setEmail, phone, setPhone, message, setMessage, 
            submitting, submitForm
        }}>
            {children}
        </AppContext.Provider>
    );
};
