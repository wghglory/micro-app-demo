import React from 'react';

export default function HomePage() {
  return (
    <div>
      <h1>Main React App Home Page</h1>
      <hr />
      <p>Child App</p>
      <micro-app name='childReact' url='http://localhost:3001' baseurl='/home'></micro-app>
    </div>
  );
}
