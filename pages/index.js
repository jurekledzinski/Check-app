import React, { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/v1/message');
      console.log(response);

      if (response.ok) {
        const result = await response.json();
        setMessage(result.msgSuccess);
      }
    };

    fetchData();
  }, []);

  return <div className="textMessage">{message}</div>;
}
