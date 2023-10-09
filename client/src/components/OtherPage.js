import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div className="other-page">
      <h2>This is another page</h2>
      <p>Welcome to the other page of the application.</p>
      <Link to="/">Go back to the home screen</Link>
    </div>
  );
};

export default OtherPage;
