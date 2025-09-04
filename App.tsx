import React from 'react';
import './styles/App.css';
import UrlShortenerForm from './components/UrlShortenerForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <UrlShortenerForm />
    </div>
  );
};

export default App;