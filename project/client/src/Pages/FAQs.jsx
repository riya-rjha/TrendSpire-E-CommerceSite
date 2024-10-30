import React from 'react';

const FAQs = () => {
  const faqData = [
    {
      question: 'What is TrendSpire and how does it work?',
      answer: 'TrendSpire is an e-commerce platform offering fashion trends and personalized recommendations through our AI chatbot Ivy, tailored to your style.'
    },
    {
      question: 'How does the AI chatbot Ivy help with shopping?',
      answer: 'Ivy assists by suggesting trending styles based on your preferences, making shopping easier and more personalized.'
    },
    {
      question: 'What payment methods are accepted on TrendSpire?',
      answer: 'We accept all major credit and debit cards, PayPal, and secure digital wallets for smooth transactions.'
    },
    {
      question: 'Can I track my order on TrendSpire?',
      answer: 'Yes, you can track your order status from your account under “Order History” with real-time updates.'
    },
    {
      question: 'Does TrendSpire offer international shipping?',
      answer: 'We offer worldwide shipping to ensure you can get your favorite fashion items wherever you are.'
    },
    {
      question: 'What is the return policy on TrendSpire?',
      answer: 'Items can be returned within 30 days of delivery for a full refund or exchange. Visit our returns page for details.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our support team via live chat on the website or email us at support@trendspire.com for assistance.'
    }
  ];

  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h2 className="text-green-600 text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className={`p-6 mb-4 rounded-md ${index % 2 === 0 ? 'bg-green-50' : 'bg-green-100'}`}>
          <h3 className="text-xl font-medium text-green-700 mb-2">{item.question}</h3>
          <p className="text-gray-700">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
