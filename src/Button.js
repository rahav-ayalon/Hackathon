import React from 'react';
import { Link } from 'react-router-dom';

export default function Button() {
  return (
    <>
      <div className="Buttons">
        <button class={'btn1'}>
          <Link to="/filtering">Sky News</Link>
        </button>
        <button class={'btn1'}>
          <Link to="/filtering">The Guardian</Link>
        </button>
        <button class={'btn1'}>
          <Link to="/filtering">Al Jazeera</Link>
        </button>
      </div>
    </>
  );
}
