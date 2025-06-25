import React from 'react';
import Header from '../components/Header';

const Terms = () => {
    return (
        <div>
            <Header></Header>
            <h2  className="text-xl font-extrabold mt-4">Privacy Policy</h2>
            <p  className="mt-2 text-lg text-gray-600 py-4">At YourCompany, we prioritize your privacy. This policy outlines how we collect, use, store, and protect your personal information. By using our services, you agree to the practices described here. We do not share your data with third parties without your consent, and we take strict accountable security measures to safeguard your information.</p>
            <h2  className="text-2xl font-extrabold"> Terms & Conditions</h2>
            <p className="mt-2 text-lg text-gray-600 py-4">These Terms & Conditions govern your use of our website and services. By accessing or using our platform, you agree to comply with these rules. This includes acceptable use, user responsibilities, and limitations of liability. Please read them carefully before continuing to use the service.</p>
            <h2  className="text-2xl font-extrabold">Contact Us</h2>
            <p className="mt-2 text-lg  text-gray-600 py-4">Have questions, feedback, or need assistance? Our support team is here to help. You can reach us through our contact form, email, or social media channels. We aim to respond within 24–48 hours on business days.</p>
        </div>
    );
};

export default Terms;