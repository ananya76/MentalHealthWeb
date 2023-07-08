import React, { useState } from 'react';


const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className="newsletter-box">
      <h1 className="newsletter-heading">The latest mental health news and tips, delivered to your inbox weekly.</h1>
      <div className="input-container">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
        <button onClick={handleSubscribe} className="subscribe-button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;