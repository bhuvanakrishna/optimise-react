import React from 'react';
import { Link } from 'react-router-dom';
import { testPages } from './test-data';

const Home = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2>Test Pages</h2>
      <ul>
        {testPages.map((page) => (
          <li key={page.name}>
            <Link to={`/test/${page.name}`}>{page.name}</Link> — {page.pattern}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
