import React, { useEffect, useState } from 'react';

export default function Home({ users }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/v1/message');

      if (response.ok) {
        const result = await response.json();
        setMessage(result.msgSuccess);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="textMessage">
      <div>{message}</div>
      <div>Users:</div>
      <ul>
        {users.length > 0 &&
          users.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const domainUrl = context.req.headers.host;

  const response = await fetch(`https://${domainUrl}/api/v1/users`);

  const data = await response.json();

  return {
    props: {
      users: data.data,
    },
  };
}
