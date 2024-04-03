import logo from './logo.svg';
import './URLshortner.css';

import React, { useState } from 'react';

const URLShortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const shortenUrl = () => {
    const mockShortenedUrl = `http://sho.rt/${Math.random().toString(36).substr(2, 5)}`;
    setShortenedUrl(mockShortenedUrl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenedUrl).then(() => {
      alert('URL copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="container">
      <input 
        className="input-field"
        type="text" 
        placeholder="Enter URL here" 
        value={url} 
        onChange={e => setUrl(e.target.value)}
      />
      <button 
        className="shorten-button"
        onClick={shortenUrl}
        disabled={!url}
      >
        Shorten
      </button>
      {shortenedUrl && (
        <div className="result-container">
          <p>Shortened URL: <a className="result-link" href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
          <button 
            className="copy-button"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
};




export default URLShortener;
