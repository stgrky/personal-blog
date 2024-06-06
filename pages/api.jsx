// src/App.js
import React, { useState } from 'react';

const App = () => {
  // Replace this with your actual array of customer IDs
  const customerIds = [
    '8037936726316', 'customer-2', 'customer-3', /* ... up to 27 customer IDs ... */ 'customer-27'
  ];

  const [responses, setResponses] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async () => {
    const fetchPromises = customerIds.map(customerId => {
      const postData = {
        merchantId: '',
        customerId: customerId,
        segmentId: ''
      };

      return fetch('https://api.example.com/customers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY_HERE'  // Add your API key here
        },
        body: JSON.stringify(postData)
      })
      .then(response => response.json())
      .catch(error => ({ error: error.message }));
    });

    const results = await Promise.all(fetchPromises);
    setResponses(results.filter(result => !result.error));
    setErrors(results.filter(result => result.error));
  };

  return (
    <div>
      <h1>Submit Customer IDs</h1>
      <button onClick={handleSubmit}>Submit</button>
      {responses.length > 0 && (
        <div>
          <h2>Responses</h2>
          <pre>{JSON.stringify(responses, null, 2)}</pre>
        </div>
      )}
      {errors.length > 0 && (
        <div>
          <h2>Errors</h2>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
