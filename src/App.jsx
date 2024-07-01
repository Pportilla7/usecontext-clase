import React from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageSelector from './LanguageSelector';
import Greeting from './Greeting';

function App() {
  return (
    <LanguageProvider>
      <div>
        <LanguageSelector />
        <Greeting />
      </div>
    </LanguageProvider>
  );
}

export default App;
