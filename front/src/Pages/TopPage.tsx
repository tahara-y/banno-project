import React, { useEffect, useState } from 'react';

const TopPage = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://tahara-study.net/api/messages/1', {
      method: 'GET',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
      .then(data => setMessage(data.text))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <>
      {message}
    </>

  )
};

export default TopPage
